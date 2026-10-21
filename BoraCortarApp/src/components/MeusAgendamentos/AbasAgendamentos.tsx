import React from "react";
import { Pressable, Text, View } from "react-native";
import { abasAgendamentosStyles as styles } from "@/styles/MeusAgendamentos/abasAgendamentos.styles";
import { AbaAgendamentos } from "@/types/meusAgendamentos";
 
type Props = {
  atual: AbaAgendamentos;
  onChange: (aba: AbaAgendamentos) => void;
};
 
const ABAS: { chave: AbaAgendamentos; rotulo: string }[] = [
  { chave: "proximos", rotulo: "Próximos" },
  { chave: "historico", rotulo: "Histórico" },
];
 
export function AbasAgendamentos({ atual, onChange }: Props) {
  return (
    <View style={styles.container}>
      {ABAS.map((aba) => {
        const ativa = aba.chave === atual;
        return (
          <Pressable
            key={aba.chave}
            style={[styles.aba, ativa && styles.abaAtiva]}
            onPress={() => onChange(aba.chave)}
            accessibilityRole="tab"
            accessibilityState={{ selected: ativa }}
          >
            <Text style={[styles.texto, ativa && styles.textoAtivo]}>{aba.rotulo}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}