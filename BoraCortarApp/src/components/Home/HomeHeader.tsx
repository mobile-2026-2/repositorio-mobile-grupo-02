import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { homeHeaderStyles as styles } from "@/styles/Home/homeHeader.styles";
 
type Props = {
  nomeUsuario: string;
  temNotificacoesNovas?: boolean; // mostra o pontinho vermelho no sino
  onNotificacoesPress?: () => void; // toque no sino (abre o painel)
};
 
export function HomeHeader({
  nomeUsuario,
  temNotificacoesNovas = false,
  onNotificacoesPress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.saudacao}>Olá, {nomeUsuario}</Text>
        <Text style={styles.subtitulo}>
          Encontre a melhor barbearia perto de você.
        </Text>
      </View>
 
      <Pressable
        style={styles.sino}
        hitSlop={8}
        onPress={onNotificacoesPress}
        accessibilityRole="button"
        accessibilityLabel="Notificações"
      >
        <Ionicons name="notifications-outline" size={26} color={colors.textPrimary} />
        {temNotificacoesNovas && <View style={styles.badge} />}
      </Pressable>
    </View>
  );
}