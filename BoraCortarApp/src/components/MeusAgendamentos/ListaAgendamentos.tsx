import React from "react";
import { Text, View } from "react-native";
import type { AgendamentoDoc } from "@/services/database.types";
import { listaAgendamentosStyles as styles } from "@/styles/MeusAgendamentos/listaAgendamentos.styles";
import { AgendamentoCard } from "./AgendamentosCard";
 
type Props = {
  agendamentos: AgendamentoDoc[];
  mensagemVazia: string;
  onVerFila: (agendamento: AgendamentoDoc) => void;
  onCancelar: (agendamento: AgendamentoDoc) => void;
};
 
export function ListaAgendamentos({ agendamentos, mensagemVazia, onVerFila, onCancelar }: Props) {
  if (agendamentos.length === 0) {
    return <Text style={styles.vazio}>{mensagemVazia}</Text>;
  }
 
  return (
    <View style={styles.container}>
      {agendamentos.map((agendamento) => (
        <AgendamentoCard
          key={agendamento.id}
          agendamento={agendamento}
          onVerFila={onVerFila}
          onCancelar={onCancelar}
        />
      ))}
    </View>
  );
}