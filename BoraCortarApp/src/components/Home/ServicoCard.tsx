import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { servicoCardStyles as styles } from "@/styles/home/servicoCard.styles";
import { Servico } from "@/types";

type Props = {
  servico: Servico;
  onPress?: (servico: Servico) => void;
};

export function ServicoCard({ servico, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={() => onPress?.(servico)}>
      <Ionicons name={servico.icone} size={24} color={colors.textPrimary} />
      <Text style={styles.nome}>{servico.nome}</Text>
    </Pressable>
  );
}