import { updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { apenasNumeros } from "@/utils/validators";
import { auth, db } from "./firebase";
 
/**
 * Atualiza nome e celular do usuario logado.
 * (As regras do Firestore so deixam alterar esses dois campos: e-mail e CPF sao travados.)
 */
export async function atualizarPerfil(dados: { nome: string; celular: string }) {
  const usuario = auth.currentUser;
  if (!usuario) throw new Error("Você precisa estar logado.");
 
  const nome = dados.nome.trim();
  const celular = apenasNumeros(dados.celular);
 
  await updateDoc(doc(db, "users", usuario.uid), { nome, celular });
  await updateProfile(usuario, { displayName: nome });
}