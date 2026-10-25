import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { buscarPerfil } from "@/services/authService";
import type { UsuarioDoc } from "@/services/database.types";
 
/** Nome e e-mail de quem está logado (perfil salvo no Firestore em users/{uid}). */
export function usePerfil() {
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<UsuarioDoc | null>(null);
 
  // Recarrega toda vez que a tela ganha foco (ex.: depois de editar os dados pessoais).
  useFocusEffect(
    useCallback(() => {
      if (!user) {
        setPerfil(null);
        return;
      }
 
      let ativo = true;
      buscarPerfil(user.uid)
        .then((dados) => {
          if (ativo) setPerfil(dados);
        })
        .catch(() => {
          // Se falhar, usamos os dados do Firebase Auth (abaixo).
        });
 
      return () => {
        ativo = false;
      };
    }, [user])
  );
 
  return {
    // Enquanto o Firestore responde, já mostramos o que o Firebase Auth tem.
    nome: perfil?.nome ?? user?.displayName ?? "Usuário",
    email: perfil?.email ?? user?.email ?? "",
  };
}