import React from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { botaoFiltrarStyles as styles } from "@/styles/Explorar/botaoFiltrar.styles";
 
type Props = {
  onPress: () => void;
};
 
export function BotaoFiltrar({ onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress} accessibilityRole="button">
      <Ionicons name="options-outline" size={20} color="#FFFFFF" />
      <Text style={styles.texto}>Filtrar</Text>
    </Pressable>
  );
}