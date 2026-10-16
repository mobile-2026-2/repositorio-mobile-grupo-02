import {
  createUserWithEmailAndPassword,
  deleteUser,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { apenasNumeros } from "@/utils/validators";
import { auth, db } from "./firebase";
import type { UsuarioDoc } from "./database.types";
 
export type DadosCadastro = {
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  senha: string;
};
 
/**
 * Cria a conta no Firebase Auth e, em seguida, salva o perfil em users/{uid}.
 * Se salvar o perfil falhar, a conta recem-criada e removida para nao
 * ficar um usuario "pela metade" (existe no Auth, mas sem dados no banco).
 */
export async function cadastrarUsuario(dados: DadosCadastro) {
  const email = dados.email.trim().toLowerCase();
  const nome = dados.nome.trim();
 
  const credencial = await createUserWithEmailAndPassword(auth, email, dados.senha);
 
  try {
    await updateProfile(credencial.user, { displayName: nome });
 
    await setDoc(doc(db, "users", credencial.user.uid), {
      nome,
      email,
      cpf: apenasNumeros(dados.cpf),
      celular: apenasNumeros(dados.celular),
      criadoEm: serverTimestamp(),
    });
  } catch (erro) {
    await deleteUser(credencial.user).catch(() => {});
    throw erro;
  }
 
  return credencial.user;
}
 
export async function loginUsuario(email: string, senha: string) {
  const credencial = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), senha);
  return credencial.user;
}
 
export async function logoutUsuario() {
  await signOut(auth);
}
 
export async function recuperarSenha(email: string) {
  await sendPasswordResetEmail(auth, email.trim().toLowerCase());
}
 
export async function buscarPerfil(uid: string): Promise<UsuarioDoc | null> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? (snap.data() as UsuarioDoc) : null;
}
 
/** Converte os codigos de erro do Firebase em mensagens para o usuario. */
export function traduzirErro(erro: unknown): string {
  const codigo = (erro as { code?: string })?.code ?? "";
 
  switch (codigo) {
    case "auth/email-already-in-use":
      return "Este e-mail já está cadastrado.";
    case "auth/invalid-email":
      return "E-mail inválido.";
    case "auth/weak-password":
      return "Senha muito fraca. Use ao menos 6 caracteres.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "E-mail ou senha incorretos.";
    case "auth/user-disabled":
      return "Esta conta foi desativada.";
    case "auth/too-many-requests":
      return "Muitas tentativas. Aguarde alguns minutos e tente de novo.";
    case "auth/network-request-failed":
      return "Sem conexão com a internet.";
    case "permission-denied":
      return "Sem permissão para salvar os dados. Verifique as regras do Firestore.";
    default:
      return "Não foi possível concluir a operação. Tente novamente.";
  }
}