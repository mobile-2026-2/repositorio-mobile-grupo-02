import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { filaResumoStyles as styles } from "@/styles/FilaEspera/filaResumo.styles";
import { FonteImagem } from "@/types/barbeariaDetalhes";
import { formatarDuracao } from "@/utils/agendamentoFormatters";
 
type Props = {
  nome: string;
  logo?: FonteImagem;
  tempoEsperaMin: number;
};
 
export function FilaResumo({ nome, logo, tempoEsperaMin }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {logo ? (
          <Image source={logo} style={StyleSheet.absoluteFill} contentFit="cover" />
        ) : (
          <Ionicons name="cut-outline" size={32} color="#FFFFFF" />
        )}
      </View>
 
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>
          {nome}
        </Text>
        <Text style={styles.rotulo}>Tempo estimado de espera</Text>
        <Text style={styles.tempo}>
          {tempoEsperaMin <= 0 ? "Sua vez!" : formatarDuracao(tempoEsperaMin)}
        </Text>
      </View>
    </View>
  );
}