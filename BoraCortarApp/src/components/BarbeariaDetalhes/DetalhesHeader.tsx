import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { detalhesHeaderStyles as styles } from "@/styles/BarbeariaDetalhes/detalhesHeader.styles";
 
type Props = {
  titulo: string;
  onVoltar: () => void;
  onCompartilhar: () => void;
};
 
export function DetalhesHeader({ titulo, onVoltar, onCompartilhar }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.botao} onPress={onVoltar} accessibilityLabel="Voltar">
        <Ionicons name="chevron-back" size={26} color="#111111" />
      </Pressable>
 
      <Text style={styles.titulo} numberOfLines={1}>
        {titulo}
      </Text>
 
      <Pressable style={styles.botao} onPress={onCompartilhar} accessibilityLabel="Compartilhar">
        <Ionicons name="share-outline" size={22} color="#111111" />
      </Pressable>
    </View>
  );
}