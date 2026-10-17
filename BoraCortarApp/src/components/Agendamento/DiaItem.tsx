import React from "react";
import { Pressable, Text } from "react-native";
import { diaItemStyles as styles } from "@/styles/Agendamento/diaItem.styles";
import { DiaAgendamento } from "@/types/agendamento";
 
type Props = {
  dia: DiaAgendamento;
  selecionado: boolean;
  onPress: (chave: string) => void;
};
 
export function DiaItem({ dia, selecionado, onPress }: Props) {
  return (
    <Pressable
      style={[styles.container, selecionado && styles.selecionado]}
      onPress={() => onPress(dia.chave)}
      accessibilityRole="button"
      accessibilityState={{ selected: selecionado }}
    >
      <Text style={[styles.diaSemana, selecionado && styles.textoSelecionado]}>{dia.diaSemana}</Text>
      <Text style={[styles.numero, selecionado && styles.textoSelecionado]}>{dia.numero}</Text>
    </Pressable>
  );
}