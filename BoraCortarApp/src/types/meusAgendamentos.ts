export type AbaAgendamentos = "proximos" | "historico";
 
export type TomStatus = "neutro" | "sucesso" | "erro";
 
export type RotuloStatus = {
  texto: string;
  tom: TomStatus;
};