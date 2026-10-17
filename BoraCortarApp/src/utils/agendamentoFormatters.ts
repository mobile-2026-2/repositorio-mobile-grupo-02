import type { ServicoDoc } from "@/services/database.types";
import type { DiaAgendamento } from "@/types/agendamento";
import type { ServicoBarbearia } from "@/types/barbeariaDetalhes";
 
const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
 
function doisDigitos(n: number): string {
  return String(n).padStart(2, "0");
}
 
export function chaveDoDia(data: Date): string {
  return `${data.getFullYear()}-${doisDigitos(data.getMonth() + 1)}-${doisDigitos(data.getDate())}`;
}
 
/** Os próximos `quantidade` dias, começando em hoje. */
export function gerarDias(quantidade: number, base: Date = new Date()): DiaAgendamento[] {
  return Array.from({ length: quantidade }, (_, i) => {
    const data = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i);
    return {
      chave: chaveDoDia(data),
      data,
      diaSemana: DIAS_SEMANA[data.getDay()],
      numero: data.getDate(),
    };
  });
}
 
/** Junta o dia escolhido com um horário "HH:MM". */
export function montarDataHora(dia: Date, hora: string): Date {
  const [h, m] = hora.split(":").map(Number);
  return new Date(dia.getFullYear(), dia.getMonth(), dia.getDate(), h, m, 0, 0);
}
 
/** Horário que já passou (só importa quando o dia escolhido é hoje). */
export function horarioJaPassou(dia: Date, hora: string, agora: Date = new Date()): boolean {
  return montarDataHora(dia, hora).getTime() <= agora.getTime();
}
 
/** 50 -> "50 min" | 80 -> "1h 20 min" */
export function formatarDuracao(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const resto = min % 60;
  return resto === 0 ? `${h}h` : `${h}h ${resto} min`;
}
 
/** "Qua, 21/10 às 14:00" */
export function formatarDataHora(data: Date): string {
  return `${DIAS_SEMANA[data.getDay()]}, ${doisDigitos(data.getDate())}/${doisDigitos(data.getMonth() + 1)} às ${doisDigitos(data.getHours())}:${doisDigitos(data.getMinutes())}`;
}
 
/** Vários serviços viram um só: "Corte + Barba", preço e duração somados. */
export function resumirServicos(servicos: ServicoBarbearia[]): ServicoDoc {
  return {
    id: servicos.map((s) => s.id).join("+"),
    nome: servicos.map((s) => s.nome).join(" + "),
    preco: servicos.reduce((total, s) => total + s.preco, 0),
    duracaoMin: servicos.reduce((total, s) => total + s.duracaoMin, 0),
  };
}