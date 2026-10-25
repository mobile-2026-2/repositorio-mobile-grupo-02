import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { filtrosModalStyles as styles } from "@/styles/Explorar/filtrosModal.styles";
import type { OrdenacaoExplorar } from "@/types/explorar";
 
const OPCOES: { chave: OrdenacaoExplorar; rotulo: string; icone: keyof typeof Ionicons.glyphMap }[] = [
  { chave: "proximas", rotulo: "Mais próximas", icone: "navigate-outline" },
  { chave: "avaliacao", rotulo: "Melhor avaliadas", icone: "star-outline" },
];
 
type Props = {
  visivel: boolean;
  ordenacao: OrdenacaoExplorar;
  onSelecionar: (ordenacao: OrdenacaoExplorar) => void;
  onFechar: () => void;
};
 
export function FiltrosModal({ visivel, ordenacao, onSelecionar, onFechar }: Props) {
  return (
    <Modal visible={visivel} transparent animationType="slide" onRequestClose={onFechar}>
      <View style={styles.fundo}>
        <Pressable style={styles.sombra} onPress={onFechar} accessibilityLabel="Fechar" />
 
        <View style={styles.folha}>
          <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Ordenar por</Text>
            <Pressable onPress={onFechar} accessibilityLabel="Fechar" hitSlop={8}>
              <Ionicons name="close" size={24} color="#111111" />
            </Pressable>
          </View>
 
          {OPCOES.map((opcao) => {
            const ativa = opcao.chave === ordenacao;
            return (
              <Pressable
                key={opcao.chave}
                style={[styles.opcao, ativa && styles.opcaoAtiva]}
                onPress={() => {
                  onSelecionar(opcao.chave);
                  onFechar();
                }}
                accessibilityRole="radio"
                accessibilityState={{ selected: ativa }}
              >
                <Ionicons name={opcao.icone} size={20} color={ativa ? "#FFFFFF" : "#111111"} />
                <Text style={[styles.opcaoTexto, ativa && styles.opcaoTextoAtivo]}>{opcao.rotulo}</Text>
                {ativa && <Ionicons name="checkmark" size={20} color="#FFFFFF" />}
              </Pressable>
            );
          })}
        </View>
      </View>
    </Modal>
  );
}