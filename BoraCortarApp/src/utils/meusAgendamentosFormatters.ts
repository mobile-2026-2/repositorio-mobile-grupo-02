import type { AgendamentoDoc } from "@/services/database.types";
import type { RotuloStatus } from "@/types/meusAgendamentos";
 
const UMA_HORA_MS = 60 * 60 * 1000;
 
function doisDigitos(n: number): string {
  return String(n).padStart(2, "0");
}
 
/** "21/08/2024 às 14:00" */
export function formatarDataCompleta(data: Date): string {
  return `${doisDigitos(data.getDate())}/${doisDigitos(data.getMonth() + 1)}/${data.getFullYear()} às ${doisDigitos(data.getHours())}:${doisDigitos(data.getMinutes())}`;
}
 
/** Pendente ou confirmado: ainda nao foi cancelado nem concluido. */
export function estaAtivo(agendamento: AgendamentoDoc): boolean {
  return agendamento.status === "pendente" || agendamento.status === "confirmado";
}
 
function fimDoAgendamento(agendamento: AgendamentoDoc): number {
  return agendamento.data.toMillis() + agendamento.duracaoMin * 60 * 1000;
}
 
/** Ativo e dentro da janela: 1h antes do horario ate o fim do servico. */
export function estaEmAndamento(agendamento: AgendamentoDoc, agora: Date = new Date()): boolean {
  const t = agora.getTime();
  return (
    estaAtivo(agendamento) &&
    t >= agendamento.data.toMillis() - UMA_HORA_MS &&
    t < fimDoAgendamento(agendamento)
  );
}
 
/** Ativo e ainda nao terminou: vai para a aba "Proximos". */
export function ehProximo(agendamento: AgendamentoDoc, agora: Date = new Date()): boolean {
  return estaAtivo(agendamento) && fimDoAgendamento(agendamento) > agora.getTime();
}
 
/** Proximos: do mais cedo ao mais tarde. Historico: do mais recente ao mais antigo. */
export function separarAgendamentos(lista: AgendamentoDoc[], agora: Date = new Date()) {
  const proximos = lista
    .filter((a) => ehProximo(a, agora))
    .sort((x, y) => x.data.toMillis() - y.data.toMillis());
 
  const historico = lista
    .filter((a) => !ehProximo(a, agora))
    .sort((x, y) => y.data.toMillis() - x.data.toMillis());
 
  return { proximos, historico };
}
 
export function rotuloStatus(agendamento: AgendamentoDoc, agora: Date = new Date()): RotuloStatus {
  if (agendamento.status === "cancelado") return { texto: "Cancelado", tom: "erro" };
  if (agendamento.status === "concluido") return { texto: "Concluído", tom: "sucesso" };
  if (ehProximo(agendamento, agora)) {
    return { texto: agendamento.status === "confirmado" ? "Confirmado" : "Agendado", tom: "neutro" };
  }
  return { texto: "Finalizado", tom: "neutro" };
}
