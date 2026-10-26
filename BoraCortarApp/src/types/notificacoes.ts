export type TipoNotificacao = "lembrete" | "fila";
 
export type Notificacao = {
  id: string; // "tipo:agendamentoId" (usado para saber se já foi vista)
  tipo: TipoNotificacao;
  titulo: string;
  mensagem: string;
  agendamentoId: string;
};