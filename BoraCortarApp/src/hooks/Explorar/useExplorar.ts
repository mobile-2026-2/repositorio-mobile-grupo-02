import { useMemo, useState } from "react";
import { useHomeData } from "@/hooks/Home/useHomeDate";
import type { OrdenacaoExplorar } from "@/types/explorar";
import { filtrarBarbearias, ordenarBarbearias } from "@/utils/explorarBusca";
 
/** Estado da tela Explorar: texto da busca, ordenação e barbearias encontradas. */
export function useExplorar() {
  const { barbearias } = useHomeData();
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState<OrdenacaoExplorar>("proximas");
 
  const resultados = useMemo(
    () => ordenarBarbearias(filtrarBarbearias(barbearias, busca), ordenacao),
    [barbearias, busca, ordenacao]
  );
 
  return {
    todas: barbearias,
    resultados,
    busca,
    setBusca,
    ordenacao,
    setOrdenacao,
    buscando: busca.trim() !== "",
  };
}