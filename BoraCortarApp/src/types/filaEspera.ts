export type ItemFila = {
  id: string;
  nome: string;
  servico: string;
  ehVoce: boolean;
};
 
export type FilaEspera = {
  tempoEsperaMin: number; // soma da duracao de quem esta na frente do cliente
  itens: ItemFila[];
};