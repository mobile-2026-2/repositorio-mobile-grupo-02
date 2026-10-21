import React from "react";
import { Text, View } from "react-native";
import { statusBadgeStyles as styles } from "@/styles/MeusAgendamentos/statusBadge.styles";
import { RotuloStatus } from "@/types/meusAgendamentos";
 
export function StatusBadge({ texto, tom }: RotuloStatus) {
  return (
    <View
      style={[
        styles.container,
        tom === "sucesso" && styles.tomSucesso,
        tom === "erro" && styles.tomErro,
      ]}
    >
      <Text
        style={[
          styles.texto,
          tom === "sucesso" && styles.textoSucesso,
          tom === "erro" && styles.textoErro,
        ]}
      >
        {texto}
      </Text>
    </View>
  );
}