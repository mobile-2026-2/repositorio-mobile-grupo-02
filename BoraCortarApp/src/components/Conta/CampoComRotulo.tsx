import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { campoComRotuloStyles as styles } from "@/styles/Conta/campoComRotulo.styles";
 
type Props = TextInputProps & {
  rotulo: string;
};
 
export function CampoComRotulo({ rotulo, editable = true, style, ...resto }: Props) {
  return (
    <View style={[styles.container, !editable && styles.desabilitado]}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        {...resto}
        style={[styles.input, style]}
        editable={editable}
        placeholderTextColor="#8A8A8A"
      />
    </View>
  );
}