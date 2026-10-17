import React from "react";
import { View } from "react-native";
import { seletorProfissionalStyles as styles } from "@/styles/Agendamento/seletorProfissional.styles";
import { Profissional } from "@/types/agendamento";
import { ProfissionalItem } from "./ProfissionalItem";
 
type Props = {
  profissionais: Profissional[];
  selecionadoId: string;
  onSelecionar: (id: string) => void;
};
 
export function SeletorProfissional({ profissionais, selecionadoId, onSelecionar }: Props) {
  return (
    <View style={styles.container}>
      {profissionais.map((profissional) => (
        <ProfissionalItem
          key={profissional.id}
          profissional={profissional}
          selecionado={profissional.id === selecionadoId}
          onPress={onSelecionar}
        />
      ))}
    </View>
  );
}