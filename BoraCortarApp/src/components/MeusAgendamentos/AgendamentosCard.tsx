import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useBarbeariaDetalhes } from "@/hooks/BarbeariaDetalhes/useBarbeariaDetalhes";
import type { AgendamentoDoc } from "@/services/database.types";
import { agendamentoCardStyles as styles } from "@/styles/MeusAgendamentos/agendamentoCard.styles";
import {
  ehProximo,
  estaEmAndamento,
  formatarDataCompleta,
  rotuloStatus,
} from "@/utils/meusAgendamentosFormatters";
import { AndamentoAviso } from "./AndamentoAviso";
import { StatusBadge } from "./StatusBadge";
 
type Props = {
  agendamento: AgendamentoDoc;
  onVerFila: (agendamento: AgendamentoDoc) => void;
  onCancelar: (agendamento: AgendamentoDoc) => void;
};
 
export function AgendamentoCard({ agendamento, onVerFila, onCancelar }: Props) {
  // A logo da barbearia vem dos detalhes (se nao tiver, mostramos um icone).
  const { detalhes } = useBarbeariaDetalhes(agendamento.barbeariaId);
 
  const agora = new Date();
  const emAndamento = estaEmAndamento(agendamento, agora);
  // Agendamento futuro (ainda nao comecou nem terminou) e que nao esta "em andamento".
  const futuro = ehProximo(agendamento, agora) && !emAndamento;
 
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.logo}>
          {detalhes?.logo ? (
            <Image source={detalhes.logo} style={StyleSheet.absoluteFill} contentFit="cover" />
          ) : (
            <Ionicons name="cut-outline" size={22} color="#FFFFFF" />
          )}
        </View>
 
        <View style={styles.info}>
          <Text style={styles.nome} numberOfLines={1}>
            {agendamento.barbeariaNome}
          </Text>
          <Text style={styles.servico} numberOfLines={2}>
            {agendamento.servicoNome}
          </Text>
          <Text style={styles.data}>{formatarDataCompleta(agendamento.data.toDate())}</Text>
          {agendamento.profissionalNome ? (
            <Text style={styles.profissional}>com {agendamento.profissionalNome}</Text>
          ) : null}
        </View>
      </View>
 
      {emAndamento ? (
        <AndamentoAviso onVerFila={() => onVerFila(agendamento)} />
      ) : (
        <>
          {futuro && (
            <Pressable
              style={styles.botaoFila}
              onPress={() => onVerFila(agendamento)}
              accessibilityRole="button"
            >
              <Ionicons name="people-outline" size={18} color="#111111" />
              <Text style={styles.botaoFilaTexto}>Ver fila de espera</Text>
            </Pressable>
          )}
 
          <View style={styles.rodape}>
            <StatusBadge {...rotuloStatus(agendamento, agora)} />
 
            {futuro && (
              <Pressable onPress={() => onCancelar(agendamento)} accessibilityRole="button">
                <Text style={styles.cancelar}>Cancelar agendamento</Text>
              </Pressable>
            )}
          </View>
        </>
      )}
    </View>
  );
}