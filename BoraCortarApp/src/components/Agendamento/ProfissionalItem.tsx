import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { profissionalItemStyles as styles } from "@/styles/Agendamento/profissionalItem.styles";
import { Profissional } from "@/types/agendamento";
 
type Props = {
  profissional: Profissional;
  selecionado: boolean;
  onPress: (id: string) => void;
};
 
export function ProfissionalItem({ profissional, selecionado, onPress }: Props) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress(profissional.id)}
      accessibilityRole="radio"
      accessibilityState={{ selected: selecionado }}
    >
      <View style={[styles.avatar, selecionado && styles.avatarSelecionado]}>
        <View style={styles.foto}>
          {profissional.foto ? (
            <Image source={profissional.foto} style={StyleSheet.absoluteFill} contentFit="cover" />
          ) : (
            <Text style={styles.inicial}>{profissional.nome.charAt(0).toUpperCase()}</Text>
          )}
        </View>
      </View>
 
      <Text style={[styles.nome, selecionado && styles.nomeSelecionado]} numberOfLines={1}>
        {profissional.nome}
      </Text>
    </Pressable>
  );
}