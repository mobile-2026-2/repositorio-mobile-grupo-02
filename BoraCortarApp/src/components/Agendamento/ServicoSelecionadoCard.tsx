import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { servicoSelecionadoCardStyles as styles } from "@/styles/Agendamento/servicoSelecionadoCard.styles";
import { formatarDuracao } from "@/utils/agendamentoFormatters";
import { formatarPreco } from "@/utils/detalhesFormatters";
 
type Props = {
  nome: string;
  preco: number;
  duracaoMin: number;
  onEditar: () => void;
};
 
export function ServicoSelecionadoCard({ nome, preco, duracaoMin, onEditar }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>{formatarPreco(preco)}</Text>
        <Text style={styles.duracao}>{formatarDuracao(duracaoMin)}</Text>
      </View>
 
      <Pressable style={styles.botaoEditar} onPress={onEditar} accessibilityLabel="Alterar serviço">
        <Ionicons name="create-outline" size={20} color="#111111" />
      </Pressable>
    </View>
  );
}