import React from "react";
import { View } from "react-native";
import { seletorDataStyles as styles } from "@/styles/Agendamento/seletorData.styles";
import { DiaAgendamento } from "@/types/agendamento";
import { DiaItem } from "./DiaItem";
 
type Props = {
  dias: DiaAgendamento[];
  selecionada: string;
  onSelecionar: (chave: string) => void;
};
 
export function SeletorData({ dias, selecionada, onSelecionar }: Props) {
  return (
    <View style={styles.container}>
      {dias.map((dia) => (
        <DiaItem key={dia.chave} dia={dia} selecionado={dia.chave === selecionada} onPress={onSelecionar} />
      ))}
    </View>
  );
}