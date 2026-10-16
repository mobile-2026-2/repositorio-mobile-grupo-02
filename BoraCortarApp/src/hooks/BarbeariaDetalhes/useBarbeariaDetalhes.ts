import { useMemo } from "react";
// ATENÇÃO: ajuste o caminho abaixo para o arquivo onde está o BARBEARIAS_MOCK
// (o mesmo arquivo da Home que tem BARBEARIAS_MOCK e SERVICOS_MOCK).
import { BARBEARIAS_MOCK } from "@/constants/Home/mockData";
import {
  AVALIACOES_MOCK,
  DETALHES_MOCK,
  SERVICOS_BARBEARIA_MOCK,
} from "@/constants/BarbeariaDetalhes/mock";

/**
 * Reúne tudo o que a tela de detalhes precisa para a barbearia de um id.
 * Hoje lê dos dados de exemplo; quando a Home passar a usar o Firestore,
 * só este arquivo muda (a tela e os componentes continuam iguais).
 */
export function useBarbeariaDetalhes(id?: string) {
  return useMemo(() => {
    const barbearia = BARBEARIAS_MOCK.find((b) => b.id === id) ?? null;

    return {
      barbearia,
      detalhes: id ? DETALHES_MOCK[id] ?? null : null,
      servicos: id ? SERVICOS_BARBEARIA_MOCK[id] ?? [] : [],
      avaliacoes: id ? AVALIACOES_MOCK[id] ?? [] : [],
    };
  }, [id]);
}
