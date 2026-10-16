import React from "react";
import { Pressable, Text, View } from "react-native";
import { abasDetalhesStyles as styles } from "@/styles/BarbeariaDetalhes/abasDetalhes.styles";
import { AbaDetalhes } from "@/types/barbeariaDetalhes";
 
type Props = {
  atual: AbaDetalhes;
  onChange: (aba: AbaDetalhes) => void;
};
 
const ABAS: { chave: AbaDetalhes; rotulo: string }[] = [
  { chave: "servicos", rotulo: "Serviços" },
  { chave: "informacoes", rotulo: "Informações" },
  { chave: "avaliacoes", rotulo: "Avaliações" },
];
 
export function AbasDetalhes({ atual, onChange }: Props) {
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