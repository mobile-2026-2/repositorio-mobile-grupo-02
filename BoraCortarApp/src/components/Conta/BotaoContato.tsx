import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { botaoContatoStyles as styles } from "@/styles/Conta/botaoContato.styles";
import type { IconeIonicons } from "@/types/conta";
 
type Props = {
  icone: IconeIonicons;
  rotulo: string;
  onPress: () => void;
};
 
export function BotaoContato({ icone, rotulo, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress} accessibilityRole="button">
      <Ionicons name={icone} size={20} color="#111111" />
      <Text style={styles.texto}>{rotulo}</Text>
    </Pressable>
  );
}