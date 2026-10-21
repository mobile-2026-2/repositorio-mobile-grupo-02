import { useCallback, useEffect, useState } from "react";
import { buscarAgendamento } from "@/services/Agendamentosservice";
import { traduzirErro } from "@/services/authService";
import type { AgendamentoDoc } from "@/services/database.types";
import { buscarFila } from "@/services/filaService";
import type { FilaEspera } from "@/types/filaEspera";
 
function mensagemDeErro(erro: unknown): string {
  const codigo = (erro as { code?: string })?.code;
  if (codigo === "permission-denied") {
    return "Sem permissão para ler a fila. Verifique as regras do Firestore.";
  }
  if (codigo) return traduzirErro(erro);
  return erro instanceof Error ? erro.message : traduzirErro(erro);
}
 
/** Carrega o agendamento do usuario e a fila de espera da barbearia dele. */
export function useFilaEspera(agendamentoId?: string) {
  const [agendamento, setAgendamento] = useState<AgendamentoDoc | null>(null);
  const [fila, setFila] = useState<FilaEspera | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
 
  const carregar = useCallback(async () => {
    try {
      setErro("");
      setCarregando(true);
 
      if (!agendamentoId) throw new Error("Agendamento não informado.");
      const encontrado = await buscarAgendamento(agendamentoId);
      if (!encontrado) throw new Error("Agendamento não encontrado.");
 
      setAgendamento(encontrado);
      setFila(await buscarFila(encontrado));
    } catch (e) {
      setErro(mensagemDeErro(e));
    } finally {
      setCarregando(false);
    }
  }, [agendamentoId]);
 
  useEffect(() => {
    carregar();
  }, [carregar]);
 
  return { agendamento, fila, carregando, erro, carregar };
}