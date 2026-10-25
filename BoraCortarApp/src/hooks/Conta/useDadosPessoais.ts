import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { buscarPerfil, traduzirErro } from "@/services/authService";
import { atualizarPerfil } from "@/services/perfilService";
import { formatarCelular, formatarCpf, validarCelular } from "@/utils/validators";
 
/** Carrega os dados do usuario e salva as alteracoes (so nome e celular). */
export function useDadosPessoais() {
  const { user } = useAuth();
  const [nome, setNome] = useState(user?.displayName ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");
 
  useEffect(() => {
    if (!user) {
      setCarregando(false);
      return;
    }
 
    let ativo = true;
    buscarPerfil(user.uid)
      .then((perfil) => {
        if (!ativo || !perfil) return;
        setNome(perfil.nome);
        setEmail(perfil.email);
        setCpf(formatarCpf(perfil.cpf));
        setCelular(formatarCelular(perfil.celular));
      })
      .catch(() => {
        // Se falhar, ficam os dados do Firebase Auth.
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });
 
    return () => {
      ativo = false;
    };
  }, [user]);
 
  function validar(): string {
    if (nome.trim().length < 3) return "Digite seu nome completo.";
    if (!validarCelular(celular)) return "Celular inválido. Use DDD + número.";
    return "";
  }
 
  /** Devolve true se salvou. */
  async function salvar(): Promise<boolean> {
    if (salvando) return false;
 
    const mensagem = validar();
    setErro(mensagem);
    if (mensagem) return false;
 
    try {
      setSalvando(true);
      await atualizarPerfil({ nome, celular });
      return true;
    } catch (e) {
      setErro(traduzirErro(e));
      return false;
    } finally {
      setSalvando(false);
    }
  }
 
  return { nome, setNome, email, cpf, celular, setCelular, carregando, salvando, erro, salvar };
}