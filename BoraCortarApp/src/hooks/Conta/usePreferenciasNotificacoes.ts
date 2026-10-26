import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { PreferenciasNotificacoes } from "@/types/conta";
 
const CHAVE = "preferencias-notificacoes";
 
export const PREFERENCIAS_PADRAO: PreferenciasNotificacoes = {
  lembretes: true,
  fila: true,
  promocoes: false,
};
 
/** Lê as preferências salvas neste aparelho (ou as padrão, se não houver). */
export async function lerPreferencias(): Promise<PreferenciasNotificacoes> {
  try {
    const valor = await AsyncStorage.getItem(CHAVE);
    return valor ? { ...PREFERENCIAS_PADRAO, ...JSON.parse(valor) } : PREFERENCIAS_PADRAO;
  } catch {
    return PREFERENCIAS_PADRAO;
  }
}
 
/** Preferências de notificação, guardadas neste aparelho (AsyncStorage). */
export function usePreferenciasNotificacoes() {
  const [preferencias, setPreferencias] = useState<PreferenciasNotificacoes>(PREFERENCIAS_PADRAO);
  const [carregando, setCarregando] = useState(true);
 
  useEffect(() => {
    lerPreferencias()
      .then(setPreferencias)
      .finally(() => setCarregando(false));
  }, []);
 
  function alternar(chave: keyof PreferenciasNotificacoes) {
    const novas = { ...preferencias, [chave]: !preferencias[chave] };
    setPreferencias(novas);
    AsyncStorage.setItem(CHAVE, JSON.stringify(novas)).catch(() => {});
  }
 
  return { preferencias, carregando, alternar };
}