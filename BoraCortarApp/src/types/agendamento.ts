import { FonteImagem } from "@/types/barbeariaDetalhes";
 
export type Profissional = {
  id: string;
  nome: string;
  foto?: FonteImagem; // sem foto, o app mostra a inicial do nome
};
 
export type DiaAgendamento = {
  chave: string; // "2026-10-21" (identifica o dia)
  data: Date;
  diaSemana: string; // "Qua"
  numero: number; // 21
};
 
export type HorarioAgendamento = {
  hora: string; // "14:00"
  disponivel: boolean;
};