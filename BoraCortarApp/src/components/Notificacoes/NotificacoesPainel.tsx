import React, { useEffect, useRef } from "react";
import { Animated, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { notificacoesPainelStyles as styles } from "@/styles/Notificacoes/notificacoesPainel.styles";
import type { Notificacao } from "@/types/notificacoes";
import { NotificacaoItem } from "./NotificacaoItem";
 
type Props = {
  visivel: boolean;
  notificacoes: Notificacao[];
  onFechar: () => void;
  onSelecionar: (notificacao: Notificacao) => void;
  onGerenciar: () => void;
};
 
/** Cartão que "abre" embaixo do sino da Home com as notificações. */
export function NotificacoesPainel({ visivel, notificacoes, onFechar, onSelecionar, onGerenciar }: Props) {
  const animacao = useRef(new Animated.Value(0)).current;
 
  // Ao abrir: o cartão aparece deslizando de cima e ficando visível.
  useEffect(() => {
    if (!visivel) return;
    animacao.setValue(0);
    Animated.timing(animacao, {
      toValue: 1,
      duration: 160,
      useNativeDriver: Platform.OS !== "web",
    }).start();
  }, [visivel, animacao]);
 
  if (!visivel) return null;
 
  return (
    <View style={styles.fundo}>
      <Pressable style={{ flex: 1 }} onPress={onFechar} accessibilityLabel="Fechar notificações" />
 
      <Animated.View
        style={[
          styles.cartao,
          {
            opacity: animacao,
            transform: [
              { translateY: animacao.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) },
            ],
          },
        ]}
      >
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Notificações</Text>
          <Pressable onPress={onFechar} accessibilityLabel="Fechar" hitSlop={8}>
            <Ionicons name="close" size={22} color="#111111" />
          </Pressable>
        </View>
 
        {notificacoes.length === 0 ? (
          <View style={styles.vazio}>
            <Ionicons name="notifications-off-outline" size={32} color="#9A9A9A" />
            <Text style={styles.vazioTexto}>Você não tem notificações no momento.</Text>
          </View>
        ) : (
          <ScrollView style={styles.lista} nestedScrollEnabled showsVerticalScrollIndicator={false}>
            {notificacoes.map((notificacao, indice) => (
              <NotificacaoItem
                key={notificacao.id}
                notificacao={notificacao}
                ultimo={indice === notificacoes.length - 1}
                onPress={onSelecionar}
              />
            ))}
          </ScrollView>
        )}
 
        <Pressable style={styles.rodape} onPress={onGerenciar} accessibilityRole="button">
          <Text style={styles.rodapeTexto}>Gerenciar notificações</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}