import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PreferenciasNotificacoes } from "@/types/conta";
 
const CHAVE = "preferencias-notificacoes";
 
const PADRAO: PreferenciasNotificacoes = {
  lembretes: true,
  fila: true,
  promocoes: false,
};
 
/** Preferências de notificação, guardadas neste aparelho (AsyncStorage). */
export function usePreferenciasNotificacoes() {
  const [preferencias, setPreferencias] = useState<PreferenciasNotificacoes>(PADRAO);
  const [carregando, setCarregando] = useState(true);
 
  useEffect(() => {
    AsyncStorage.getItem(CHAVE)
      .then((valor) => {
        if (valor) setPreferencias({ ...PADRAO, ...JSON.parse(valor) });
      })
      .catch(() => {
        // Sem preferência salva (ou ilegível): ficam as padrão.
      })
      .finally(() => setCarregando(false));
  }, []);
 
  function alternar(chave: keyof PreferenciasNotificacoes) {
    const novas = { ...preferencias, [chave]: !preferencias[chave] };
    setPreferencias(novas);
    AsyncStorage.setItem(CHAVE, JSON.stringify(novas)).catch(() => {});
  }
 
  return { preferencias, carregando, alternar };
}