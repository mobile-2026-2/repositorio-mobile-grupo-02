import React from "react";
import { Switch, Text, View } from "react-native";
import { linhaSwitchStyles as styles } from "@/styles/Conta/linhaSwitch.styles";
 
type Props = {
  titulo: string;
  descricao: string;
  valor: boolean;
  onChange: () => void;
  ultimo?: boolean;
};
 
export function LinhaSwitch({ titulo, descricao, valor, onChange, ultimo = false }: Props) {
  return (
    <View style={[styles.container, !ultimo && styles.divisor]}>
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
 
      <Switch
        value={valor}
        onValueChange={onChange}
        trackColor={{ false: "#D4D4D4", true: "#111111" }}
        thumbColor="#FFFFFF"
        accessibilityLabel={titulo}
      />
    </View>
  );
}