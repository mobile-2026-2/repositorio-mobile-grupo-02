import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { itemInformacaoStyles as styles } from "@/styles/Conta/itemInformacao.styles";
import type { IconeIonicons } from "@/types/conta";
 
type Props = {
  icone: IconeIonicons;
  titulo: string;
  descricao?: string;
  ultimo?: boolean;
};
 
export function ItemInformacao({ icone, titulo, descricao, ultimo = false }: Props) {
  return (
    <View style={[styles.container, !ultimo && styles.divisor]}>
      <View style={styles.icone}>
        <Ionicons name={icone} size={20} color="#111111" />
      </View>
 
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        {descricao ? <Text style={styles.descricao}>{descricao}</Text> : null}
      </View>
    </View>
  );
}