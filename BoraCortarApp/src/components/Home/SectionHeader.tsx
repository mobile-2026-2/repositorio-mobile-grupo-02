import React from "react";
import { Pressable, Text, View } from "react-native";
import { sectionHeaderStyles as styles } from "@/styles/Home/sectionHeader.styles";

type Props = {
  titulo: string;
  acaoLabel?: string;
  onAcaoPress?: () => void;
};

export function SectionHeader({ titulo, acaoLabel, onAcaoPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {acaoLabel && (
        <Pressable onPress={onAcaoPress} hitSlop={8}>
          <Text style={styles.acao}>{acaoLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}