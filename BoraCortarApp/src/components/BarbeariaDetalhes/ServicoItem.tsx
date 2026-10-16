import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { servicoItemStyles as styles } from "@/styles/BarbeariaDetalhes/servicoItem.styles";
import { ServicoBarbearia } from "@/types/barbeariaDetalhes";
import { formatarPreco } from "@/utils/detalhesFormatters";
 
type Props = {
  servico: ServicoBarbearia;
  selecionado: boolean;
  ultimo: boolean;
  onAlternar: (id: string) => void;
};
 
export function ServicoItem({ servico, selecionado, ultimo, onAlternar }: Props) {
  return (
    <View style={[styles.container, !ultimo && styles.divisor]}>
      <View style={styles.info}>
        <Text style={styles.nome}>{servico.nome}</Text>
        <Text style={styles.preco}>{formatarPreco(servico.preco)}</Text>
        <Text style={styles.duracao}>{servico.duracaoMin} min</Text>
      </View>
 
      <Pressable
        style={[styles.botao, selecionado && styles.botaoSelecionado]}
        onPress={() => onAlternar(servico.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: selecionado }}
        accessibilityLabel={`${selecionado ? "Remover" : "Adicionar"} ${servico.nome}`}
      >
        <Ionicons name={selecionado ? "checkmark" : "add"} size={18} color="#FFFFFF" />
      </Pressable>
    </View>
  );
}