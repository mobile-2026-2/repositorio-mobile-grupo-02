import React from "react";
import { Pressable, Text } from "react-native";
import { horarioItemStyles as styles } from "@/styles/Agendamento/horarioItem.styles";
 
type Props = {
  hora: string;
  selecionado: boolean;
  disponivel: boolean;
  onPress: (hora: string) => void;
};
 
export function HorarioItem({ hora, selecionado, disponivel, onPress }: Props) {
  return (
    <Pressable
      style={[
        styles.container,
        !disponivel && styles.desabilitado,
        selecionado && styles.selecionado,
      ]}
      onPress={() => onPress(hora)}
      disabled={!disponivel}
      accessibilityRole="button"
      accessibilityState={{ selected: selecionado, disabled: !disponivel }}
    >
      <Text
        style={[
          styles.texto,
          !disponivel && styles.textoDesabilitado,
          selecionado && styles.textoSelecionado,
        ]}
      >
        {hora}
      </Text>
    </Pressable>
  );
}