import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { barbeariaResumoStyles as styles } from "@/styles/BarbeariaDetalhes/barbeariaResumo.styles";
 
type Props = {
  nome: string;
  nota: number;
  totalAvaliacoes: number;
  fechaAs: string;
};
 
export function BarbeariaResumo({ nome, nota, totalAvaliacoes, fechaAs }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
 
      <View style={styles.linha}>
        <Ionicons name="star" size={16} color={colors.star} />
        <Text style={styles.nota}>{Number(nota).toFixed(1)}</Text>
        <Text style={styles.avaliacoes}>
          ({totalAvaliacoes} {totalAvaliacoes === 1 ? "avaliação" : "avaliações"})
        </Text>
      </View>
 
      <Text style={styles.horario}>Aberto até {fechaAs}</Text>
    </View>
  );
}