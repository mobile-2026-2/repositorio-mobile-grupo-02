import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { abaInformacoesStyles as styles } from "@/styles/BarbeariaDetalhes/abaInformacoes.styles";
import { DetalhesBarbearia } from "@/types/barbeariaDetalhes";
 
type Props = {
  detalhes: DetalhesBarbearia;
};
 
export function AbaInformacoes({ detalhes }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.secao}>
        <Text style={styles.titulo}>Endereço</Text>
        <View style={styles.linha}>
          <Ionicons name="location-outline" size={18} color="#444444" />
          <Text style={styles.textoLinha}>{detalhes.endereco}</Text>
        </View>
      </View>
 
      <View style={styles.secao}>
        <Text style={styles.titulo}>Telefone</Text>
        <View style={styles.linha}>
          <Ionicons name="call-outline" size={18} color="#444444" />
          <Text style={styles.textoLinha}>{detalhes.telefone}</Text>
        </View>
      </View>
 
      <View style={styles.secao}>
        <Text style={styles.titulo}>Sobre</Text>
        <Text style={styles.texto}>{detalhes.sobre}</Text>
      </View>
 
      <View style={styles.secao}>
        <Text style={styles.titulo}>Horário de funcionamento</Text>
        {detalhes.horarios.map((h) => (
          <View key={h.dia} style={styles.horarioLinha}>
            <Text style={styles.horarioDia}>{h.dia}</Text>
            <Text style={styles.horarioValor}>{h.horario}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}