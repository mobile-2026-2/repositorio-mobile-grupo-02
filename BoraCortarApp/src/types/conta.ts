import type { Ionicons } from "@expo/vector-icons";
 
export type IconeIonicons = keyof typeof Ionicons.glyphMap;
 
export type PreferenciasNotificacoes = {
  lembretes: boolean; // lembrete do horário agendado
  fila: boolean; // aviso quando a vez estiver chegando
  promocoes: boolean; // novidades e promoções
};
 
export type FormaPagamento = {
  icone: IconeIonicons;
  titulo: string;
  descricao: string;
};
 
export type PerguntaFrequenteItem = {
  id: string;
  pergunta: string;
  resposta: string;
};