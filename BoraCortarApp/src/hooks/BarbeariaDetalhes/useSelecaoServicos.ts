import { useState } from "react";
import { ServicoBarbearia } from "@/types/barbeariaDetalhes";

/** Controla quais serviços o cliente marcou com o botão "+". */
export function useSelecaoServicos(servicos: ServicoBarbearia[]) {
  const [selecionados, setSelecionados] = useState<Set<string>>(new Set());

  function alternar(id: string) {
    setSelecionados((anterior) => {
      const novo = new Set(anterior);
      if (novo.has(id)) {
        novo.delete(id);
      } else {
        novo.add(id);
      }
      return novo;
    });
  }

  const escolhidos = servicos.filter((s) => selecionados.has(s.id));
  const total = escolhidos.reduce((soma, s) => soma + s.preco, 0);

  return { selecionados, alternar, escolhidos, quantidade: escolhidos.length, total };
}
