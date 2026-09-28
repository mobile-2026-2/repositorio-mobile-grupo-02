import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { homeHeaderStyles as styles } from "@/styles/home/homeHeader.styles";

type Props = {
  nomeUsuario: string;
  temNotificacao?: boolean;
  onNotificacaoPress?: () => void;
};

export function HomeHeader({
  nomeUsuario,
  temNotificacao = true,
  onNotificacaoPress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textos}>
        <Text style={styles.saudacao}>Olá, {nomeUsuario}</Text>
        <Text style={styles.subtitulo}>
          Encontre a melhor barbearia perto de você.
        </Text>
      </View>

      <Pressable style={styles.sino} hitSlop={8} onPress={onNotificacaoPress}>
        <Ionicons name="notifications-outline" size={26} color={colors.textPrimary} />
        {temNotificacao && <View style={styles.badge} />}
      </Pressable>
    </View>
  );
}