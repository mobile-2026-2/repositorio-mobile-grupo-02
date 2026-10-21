import type { Timestamp } from "firebase/firestore";
 
/*
  MODELO DO BANCO (Firestore)
 
  users/{uid}                          -> dados do cliente (uid = id do Firebase Auth)
  barbearias/{barbeariaId}             -> catalogo de barbearias (somente leitura no app)
  barbearias/{barbeariaId}/servicos/{servicoId}  -> servicos oferecidos por cada barbearia
  agendamentos/{agendamentoId}         -> reservas feitas pelos clientes (privado de cada cliente)
  filas/{barbeariaId}/entradas/{agendamentoId}   -> fila de espera da barbearia (visivel a todos os
                                          logados; guarda so primeiro nome + servico, nunca dados pessoais)
 
  A senha NUNCA fica no Firestore: quem guarda e protege a senha e o Firebase Auth.
*/
 
export type UsuarioDoc = {
  nome: string;
  email: string;
  cpf: string; // somente numeros (11 digitos)
  celular: string; // somente numeros (DDD + numero)
  criadoEm: Timestamp;
};
 
export type BarbeariaDoc = {
  id: string;
  nome: string;
  nomeBusca: string; // nome em minusculas, usado na pesquisa por prefixo
  endereco: string;
  latitude: number;
  longitude: number;
  avaliacao: number; // 0 a 5
  totalAvaliacoes: number;
  horarioAbertura: string; // "09:00"
  horarioFechamento: string; // "20:00"
  fotoUrl: string;
  logoUrl: string;
};
 
export type ServicoDoc = {
  id: string;
  nome: string;
  preco: number; // em reais
  duracaoMin: number;
};
 
export type StatusAgendamento = "pendente" | "confirmado" | "cancelado" | "concluido";
 
export type AgendamentoDoc = {
  id: string;
  userId: string;
  barbeariaId: string;
  barbeariaNome: string; // copiado no momento da reserva (historico nao muda se a barbearia mudar)
  servicoId: string;
  servicoNome: string;
  preco: number;
  duracaoMin: number;
  profissionalId?: string;
  profissionalNome?: string;
  data: Timestamp;
  status: StatusAgendamento;
  criadoEm: Timestamp;
};
 
/** Uma pessoa na fila da barbearia. O id do documento = id do agendamento. */
export type EntradaFilaDoc = {
  primeiroNome: string;
  servicoNome: string;
  duracaoMin: number;
  data: Timestamp;
  status: StatusAgendamento;
  criadoEm: Timestamp;
};