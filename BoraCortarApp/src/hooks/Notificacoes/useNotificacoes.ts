import { useCallback, useMemo, useState } from "react";
import { useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lerPreferencias, PREFERENCIAS_PADRAO } from "@/hooks/Conta/usePreferenciasNotificacoes";
import { listarMeusAgendamentos } from "@/services/Agendamentosservice";
import type { AgendamentoDoc } from "@/services/database.types";
import { gerarNotificacoes } from "@/utils/notificacoesFormatters";
 
const CHAVE_VISTAS = "notificacoes-vistas";
 
async function lerVistas(): Promise<string[]> {
  try {
    const valor = await AsyncStorage.getItem(CHAVE_VISTAS);
    return valor ? JSON.parse(valor) : [];
  } catch {
    return [];
  }
}
 
/** Notificações do sino da Home e quantas ainda não foram vistas. */
export function useNotificacoes() {
  const [agendamentos, setAgendamentos] = useState<AgendamentoDoc[]>([]);
  const [preferencias, setPreferencias] = useState(PREFERENCIAS_PADRAO);
  const [vistas, setVistas] = useState<string[]>([]);
 
  // Recarrega quando a Home ganha foco (ex.: depois de agendar ou mudar as preferências).
  useFocusEffect(
    useCallback(() => {
      let ativo = true;
 
      Promise.all([
        listarMeusAgendamentos().catch(() => [] as AgendamentoDoc[]),
        lerPreferencias(),
        lerVistas(),
      ]).then(([lista, prefs, ids]) => {
        if (!ativo) return;
        setAgendamentos(lista);
        setPreferencias(prefs);
        setVistas(ids);
      });
 
      return () => {
        ativo = false;
      };
    }, [])
  );
 
  const notificacoes = useMemo(
    () => gerarNotificacoes(agendamentos, preferencias),
    [agendamentos, preferencias]
  );
 
  const naoLidas = notificacoes.filter((n) => !vistas.includes(n.id)).length;
 
  // Chamada quando o painel abre: o pontinho vermelho some.
  const marcarComoVistas = useCallback(() => {
    const ids = Array.from(new Set([...vistas, ...notificacoes.map((n) => n.id)])).slice(-100);
    setVistas(ids);
    AsyncStorage.setItem(CHAVE_VISTAS, JSON.stringify(ids)).catch(() => {});
  }, [vistas, notificacoes]);
 
  return { notificacoes, naoLidas, marcarComoVistas };
}