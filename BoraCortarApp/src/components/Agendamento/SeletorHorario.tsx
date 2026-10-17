import React from "react";
import { View } from "react-native";
import { seletorHorarioStyles as styles } from "@/styles/Agendamento/seletorHorario.styles";
import { HorarioAgendamento } from "@/types/agendamento";
import { HorarioItem } from "./HorarioItem";
 
const COLUNAS = 3;
 
type Props = {
  horarios: HorarioAgendamento[];
  selecionado: string | null;
  onSelecionar: (hora: string) => void;
};
 
export function SeletorHorario({ horarios, selecionado, onSelecionar }: Props) {
  // Divide a lista em linhas de 3 para formar a grade.
  const linhas: HorarioAgendamento[][] = [];
  for (let i = 0; i < horarios.length; i += COLUNAS) {
    linhas.push(horarios.slice(i, i + COLUNAS));
  }
 
  return (
    <View style={styles.container}>
      {linhas.map((linha, indice) => (
        <View key={indice} style={styles.linha}>
          {linha.map((h) => (
            <HorarioItem
              key={h.hora}
              hora={h.hora}
              disponivel={h.disponivel}
              selecionado={h.hora === selecionado}
              onPress={onSelecionar}
            />
          ))}
          {Array.from({ length: COLUNAS - linha.length }).map((_, k) => (
            <View key={`vazio-${k}`} style={styles.vazio} />
          ))}
        </View>
      ))}
    </View>
  );
}