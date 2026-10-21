import React from "react";
import { Pressable, Text, View } from "react-native";
import { andamentoAvisoStyles as styles } from "@/styles/MeusAgendamentos/andamentoAviso.styles";
 
type Props = {
  onVerFila: () => void;
};
 
export function AndamentoAviso({ onVerFila }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.linhaStatus}>
        <View style={styles.ponto} />
        <Text style={styles.status}>Em andamento</Text>
      </View>
 
      <Text style={styles.mensagem}>Sua vez está chegando!</Text>
 
      <Pressable style={styles.botao} onPress={onVerFila} accessibilityRole="button">
        <Text style={styles.botaoTexto}>Ver fila de espera</Text>
      </Pressable>
    </View>
  );
}