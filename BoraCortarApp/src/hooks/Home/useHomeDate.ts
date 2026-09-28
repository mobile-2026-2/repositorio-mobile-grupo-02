import { BARBEARIAS_MOCK, SERVICOS_MOCK } from "@/constants/home/mockData";
import { Barbearia, Servico } from "../../types";

type HomeData = {
  nomeUsuario: string;
  barbearias: Barbearia[];
  servicos: Servico[];
};

// Ponto único de acesso aos dados da Home.
// Quando o banco for definido, a troca dos mocks por consultas acontece aqui.
export function useHomeData(): HomeData {
  return {
    nomeUsuario: "Matheus",
    barbearias: BARBEARIAS_MOCK,
    servicos: SERVICOS_MOCK,
  };
}