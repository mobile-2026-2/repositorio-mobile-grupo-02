import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { secaoAgendamentoStyles as styles } from "@/styles/Agendamento/secaoAgendamento.styles";
 
type Props = {
  titulo: string;
  children: ReactNode;
};
 
export function SecaoAgendamento({ titulo, children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {children}
    </View>
  );
}