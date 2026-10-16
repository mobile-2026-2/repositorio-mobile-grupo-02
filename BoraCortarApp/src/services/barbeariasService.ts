import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import type { BarbeariaDoc, ServicoDoc } from "./database.types";
 
/** "Barbearias em destaque": ordenadas pela melhor avaliacao. */
export async function listarBarbearias(maximo = 20): Promise<BarbeariaDoc[]> {
  const consulta = query(collection(db, "barbearias"), orderBy("avaliacao", "desc"), limit(maximo));
  const snap = await getDocs(consulta);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<BarbeariaDoc, "id">) }));
}
 
export async function buscarBarbearia(id: string): Promise<BarbeariaDoc | null> {
  const snap = await getDoc(doc(db, "barbearias", id));
  return snap.exists() ? { id: snap.id, ...(snap.data() as Omit<BarbeariaDoc, "id">) } : null;
}
 
/**
 * Barra de pesquisa ("Buscar barbearias...").
 * O Firestore nao tem busca de texto livre, entao pesquisamos por PREFIXO
 * do nome (ex.: "old" encontra "Old School Barber").
 */
export async function pesquisarBarbearias(termo: string): Promise<BarbeariaDoc[]> {
  const t = termo.trim().toLowerCase();
  if (!t) return listarBarbearias();
 
  const consulta = query(
    collection(db, "barbearias"),
    where("nomeBusca", ">=", t),
    where("nomeBusca", "<=", t + "\uf8ff"),
    limit(20)
  );
  const snap = await getDocs(consulta);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<BarbeariaDoc, "id">) }));
}
 
/** Aba "Servicos" da tela de detalhes da barbearia. */
export async function listarServicos(barbeariaId: string): Promise<ServicoDoc[]> {
  const snap = await getDocs(collection(db, "barbearias", barbeariaId, "servicos"));
  return snap.docs
    .map((d) => ({ id: d.id, ...(d.data() as Omit<ServicoDoc, "id">) }))
    .sort((a, b) => a.preco - b.preco);
}