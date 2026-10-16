import React from "react";
import { Text, View } from "react-native";
import { abaAvaliacoesStyles as styles } from "@/styles/BarbeariaDetalhes/abaAvaliacoes.styles";
import { Avaliacao } from "@/types/barbeariaDetalhes";
import { AvaliacaoItem } from "./AvaliacaoItem";
 
type Props = {
  avaliacoes: Avaliacao[];
};
 
export function AbaAvaliacoes({ avaliacoes }: Props) {
  if (avaliacoes.length === 0) {
    return <Text style={styles.vazio}>Esta barbearia ainda não tem avaliações.</Text>;
  }
 
  return (
    <View style={styles.container}>
      {avaliacoes.map((avaliacao) => (
        <AvaliacaoItem key={avaliacao.id} avaliacao={avaliacao} />
      ))}
    </View>
  );
}