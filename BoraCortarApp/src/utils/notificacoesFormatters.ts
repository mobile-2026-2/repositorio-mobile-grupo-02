import type { AgendamentoDoc } from "@/services/database.types";
import type { PreferenciasNotificacoes } from "@/types/conta";
import type { Notificacao } from "@/types/notificacoes";
import { ehProximo, estaEmAndamento } from "@/utils/meusAgendamentosFormatters";
 
// Lembretes aparecem para agendamentos que acontecem nas próximas 48 horas.
const JANELA_LEMBRETE_MS = 48 * 60 * 60 * 1000;
 
function doisDigitos(n: number): string {
  return String(n).padStart(2, "0");
}
 
function mesmoDia(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  );
}
 
/** "hoje às 09:00" | "amanhã às 09:00" | "21/10 às 09:00" */
export function descreverQuando(data: Date, agora: Date = new Date()): string {
  const hora = `${doisDigitos(data.getHours())}:${doisDigitos(data.getMinutes())}`;
  const amanha = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + 1);
 
  if (mesmoDia(data, agora)) return `hoje às ${hora}`;
  if (mesmoDia(data, amanha)) return `amanhã às ${hora}`;
  return `${doisDigitos(data.getDate())}/${doisDigitos(data.getMonth() + 1)} às ${hora}`;
}
 
/**
 * Monta as notificações a partir dos agendamentos do usuário, respeitando as
 * preferências da tela "Notificações" (lembretes e fila de espera).
 */
export function gerarNotificacoes(
  agendamentos: AgendamentoDoc[],
  preferencias: PreferenciasNotificacoes,
  agora: Date = new Date()
): Notificacao[] {
  const lista: Notificacao[] = [];
 
  agendamentos
    .filter((a) => ehProximo(a, agora))
    .sort((x, y) => x.data.toMillis() - y.data.toMillis())
    .forEach((agendamento) => {
      const data = agendamento.data.toDate();
      const quando = descreverQuando(data, agora);
 
      if (estaEmAndamento(agendamento, agora)) {
        if (preferencias.fila) {
          lista.push({
            id: `fila:${agendamento.id}`,
            tipo: "fila",
            titulo: "Sua vez está chegando!",
            mensagem: `${agendamento.barbeariaNome}, ${quando}. Toque para ver a fila de espera.`,
            agendamentoId: agendamento.id,
          });
        }
        return;
      }
 
      if (preferencias.lembretes && data.getTime() - agora.getTime() <= JANELA_LEMBRETE_MS) {
        lista.push({
          id: `lembrete:${agendamento.id}`,
          tipo: "lembrete",
          titulo: "Lembrete de agendamento",
          mensagem: `${agendamento.servicoNome} em ${agendamento.barbeariaNome}, ${quando}.`,
          agendamentoId: agendamento.id,
        });
      }
    });
 
  return lista;
}