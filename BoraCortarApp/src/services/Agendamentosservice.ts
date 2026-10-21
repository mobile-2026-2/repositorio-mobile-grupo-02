import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  where,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import type { AgendamentoDoc, BarbeariaDoc, ServicoDoc } from "./database.types";
 
/** So o primeiro nome vai para a fila (os outros clientes veem isso). */
function primeiroNomeDoUsuario(): string {
  const nome = auth.currentUser?.displayName?.trim() ?? "";
  return (nome.split(" ")[0] || "Cliente").slice(0, 40);
}
 
/**
 * Botao "Confirmar agendamento".
 * Grava o agendamento E a entrada na fila da barbearia no mesmo lote:
 * ou os dois sao salvos, ou nenhum.
 */
export async function criarAgendamento(
  barbearia: Pick<BarbeariaDoc, "id" | "nome">,
  servico: ServicoDoc,
  data: Date,
  profissional?: { id: string; nome: string }
): Promise<string> {
  const usuario = auth.currentUser;
  if (!usuario) throw new Error("Você precisa estar logado para agendar.");
 
  const agendamentoRef = doc(collection(db, "agendamentos"));
  const entradaRef = doc(db, "filas", barbearia.id, "entradas", agendamentoRef.id);
 
  const batch = writeBatch(db);
 
  batch.set(agendamentoRef, {
    userId: usuario.uid,
    barbeariaId: barbearia.id,
    barbeariaNome: barbearia.nome,
    servicoId: servico.id,
    servicoNome: servico.nome,
    preco: servico.preco,
    duracaoMin: servico.duracaoMin,
    // O Firestore nao aceita "undefined": so inclui se houver profissional.
    ...(profissional && {
      profissionalId: profissional.id,
      profissionalNome: profissional.nome,
    }),
    data: Timestamp.fromDate(data),
    status: "pendente",
    criadoEm: serverTimestamp(),
  });
 
  batch.set(entradaRef, {
    primeiroNome: primeiroNomeDoUsuario(),
    servicoNome: servico.nome,
    duracaoMin: servico.duracaoMin,
    data: Timestamp.fromDate(data),
    status: "pendente",
    criadoEm: serverTimestamp(),
  });
 
  await batch.commit();
  return agendamentoRef.id;
}
 
/** Um agendamento do usuario logado (usado pela tela de fila de espera). */
export async function buscarAgendamento(id: string): Promise<AgendamentoDoc | null> {
  const snap = await getDoc(doc(db, "agendamentos", id));
  return snap.exists() ? { id: snap.id, ...(snap.data() as Omit<AgendamentoDoc, "id">) } : null;
}
 
/** Aba "Agendamentos": somente os do usuario logado, do mais proximo ao mais distante. */
export async function listarMeusAgendamentos(): Promise<AgendamentoDoc[]> {
  const usuario = auth.currentUser;
  if (!usuario) return [];
 
  const snap = await getDocs(
    query(collection(db, "agendamentos"), where("userId", "==", usuario.uid))
  );
 
  // Ordenamos aqui no app para nao exigir indice composto no Firestore.
  return snap.docs
    .map((d) => ({ id: d.id, ...(d.data() as Omit<AgendamentoDoc, "id">) }))
    .sort((a, b) => a.data.toMillis() - b.data.toMillis());
}
 
/** Cancela o agendamento e tira a pessoa da fila da barbearia. */
export async function cancelarAgendamento(id: string, barbeariaId: string) {
  const agendamentoRef = doc(db, "agendamentos", id);
  const entradaRef = doc(db, "filas", barbeariaId, "entradas", id);
 
  const batch = writeBatch(db);
  batch.update(agendamentoRef, { status: "cancelado" });
 
  // Agendamentos antigos (feitos antes da fila existir) nao tem entrada.
  const entrada = await getDoc(entradaRef);
  if (entrada.exists()) {
    batch.update(entradaRef, { status: "cancelado" });
  }
 
  await batch.commit();
}