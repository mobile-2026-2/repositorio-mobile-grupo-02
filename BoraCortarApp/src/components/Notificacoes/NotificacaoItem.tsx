import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { notificacaoItemStyles as styles } from "@/styles/Notificacoes/notificacaoItem.styles";
import type { Notificacao } from "@/types/notificacoes";
 
type Props = {
  notificacao: Notificacao;
  ultimo: boolean;
  onPress: (notificacao: Notificacao) => void;
};
 
export function NotificacaoItem({ notificacao, ultimo, onPress }: Props) {
  const ehFila = notificacao.tipo === "fila";
 
  return (
    <Pressable
      style={[styles.container, !ultimo && styles.divisor]}
      onPress={() => onPress(notificacao)}
      accessibilityRole="button"
    >
      <View style={[styles.icone, ehFila && styles.iconeFila]}>
        <Ionicons
          name={ehFila ? "people-outline" : "calendar-outline"}
          size={20}
          color={ehFila ? "#1F9D55" : "#111111"}
        />
      </View>
 
      <View style={styles.textos}>
        <Text style={styles.titulo}>{notificacao.titulo}</Text>
        <Text style={styles.mensagem}>{notificacao.mensagem}</Text>
      </View>
    </Pressable>
  );
}
 