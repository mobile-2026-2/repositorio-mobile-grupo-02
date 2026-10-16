import React from "react";
import { Text, View } from "react-native";
import { abaServicosStyles as styles } from "@/styles/BarbeariaDetalhes/abaServicos.styles";
import { ServicoBarbearia } from "@/types/barbeariaDetalhes";
import { ServicoItem } from "./ServicoItem";
 
type Props = {
  servicos: ServicoBarbearia[];
  selecionados: Set<string>;
  onAlternar: (id: string) => void;
};
 
export function AbaServicos({ servicos, selecionados, onAlternar }: Props) {
  if (servicos.length === 0) {
    return <Text style={styles.vazio}>Nenhum serviço cadastrado.</Text>;
  }
 
  return (
    <View style={styles.container}>
      {servicos.map((servico, indice) => (
        <ServicoItem
          key={servico.id}
          servico={servico}
          selecionado={selecionados.has(servico.id)}
          ultimo={indice === servicos.length - 1}
          onAlternar={onAlternar}
        />
      ))}
    </View>
  );
}