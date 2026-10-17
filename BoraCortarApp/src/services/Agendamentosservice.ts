import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import type { AgendamentoDoc, BarbeariaDoc, ServicoDoc } from "./database.types";
 
/** Botao "Confirmar agendamento" da tela de agendar. */
export async function criarAgendamento(
  barbearia: Pick<BarbeariaDoc, "id" | "nome">,
  servico: ServicoDoc,
  data: Date,
  profissional?: { id: string; nome: string }
): Promise<string> {
  const usuario = auth.currentUser;
  if (!usuario) throw new Error("Você precisa estar logado para agendar.");
 
  const referencia = await addDoc(collection(db, "agendamentos"), {
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
 
  return referencia.id;
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
 
export async function cancelarAgendamento(id: string) {
  await updateDoc(doc(db, "agendamentos", id), { status: "cancelado" });
}