import { useCallback, useMemo, useState } from "react";
import { useFocusEffect } from "expo-router";
import { cancelarAgendamento, listarMeusAgendamentos } from "@/services/Agendamentosservice";
import { traduzirErro } from "@/services/authService";
import type { AgendamentoDoc } from "@/services/database.types";
import type { AbaAgendamentos } from "@/types/meusAgendamentos";
import { separarAgendamentos } from "@/utils/meusAgendamentosFormatters";
 
/** Carrega os agendamentos do usuario e separa em "Proximos" e "Historico". */
export function useMeusAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<AgendamentoDoc[]>([]);
  const [aba, setAba] = useState<AbaAgendamentos>("proximos");
  const [carregando, setCarregando] = useState(true);
  const [atualizando, setAtualizando] = useState(false);
  const [erro, setErro] = useState("");
 
  const carregar = useCallback(async () => {
    try {
      setErro("");
      setAgendamentos(await listarMeusAgendamentos());
    } catch (e) {
      setErro(traduzirErro(e));
    } finally {
      setCarregando(false);
      setAtualizando(false);
    }
  }, []);
 
  // Recarrega toda vez que a aba ganha foco (ex.: depois de agendar um servico).
  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [carregar])
  );
 
  const atualizar = useCallback(() => {
    setAtualizando(true);
    carregar();
  }, [carregar]);
 
  const cancelar = useCallback(
    async (agendamento: AgendamentoDoc) => {
      await cancelarAgendamento(agendamento.id, agendamento.barbeariaId);
      await carregar();
    },
    [carregar]
  );
 
  const { proximos, historico } = useMemo(() => separarAgendamentos(agendamentos), [agendamentos]);
 
  return { aba, setAba, proximos, historico, carregando, atualizando, erro, atualizar, carregar, cancelar };
}