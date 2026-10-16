import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { avaliacaoItemStyles as styles } from "@/styles/BarbeariaDetalhes/avaliacaoItem.styles";
import { Avaliacao } from "@/types/barbeariaDetalhes";
 
type Props = {
  avaliacao: Avaliacao;
};
 
export function AvaliacaoItem({ avaliacao }: Props) {
  const estrelasCheias = Math.round(avaliacao.nota);
 
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>{avaliacao.autor.charAt(0).toUpperCase()}</Text>
      </View>
 
      <View style={styles.corpo}>
        <View style={styles.cabecalho}>
          <Text style={styles.autor}>{avaliacao.autor}</Text>
          <Text style={styles.data}>{avaliacao.data}</Text>
        </View>
 
        <View style={styles.estrelas}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Ionicons
              key={n}
              name={n <= estrelasCheias ? "star" : "star-outline"}
              size={14}
              color={colors.star}
            />
          ))}
        </View>
 
        <Text style={styles.comentario}>{avaliacao.comentario}</Text>
      </View>
    </View>
  );
}