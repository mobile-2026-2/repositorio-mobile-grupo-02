import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { barbeariaCardStyles as styles } from "@/styles/Home/barbeariaCard.styles";
import { Barbearia } from "@/types";
import { formatarDistancia, formatarNota } from "@/utils/formatters";

type Props = {
  barbearia: Barbearia;
  onPress?: (barbearia: Barbearia) => void;
};

export function BarbeariaCard({ barbearia, onPress }: Props) {
  const [erroImagem, setErroImagem] = useState(false);

  // Aceita imagem local (foto) ou da internet (fotoUrl).
  const fonte = barbearia.foto ?? (barbearia.fotoUrl ? { uri: barbearia.fotoUrl } : null);
  const mostrarImagem = fonte !== null && !erroImagem;

  return (
    <Pressable style={styles.container} onPress={() => onPress?.(barbearia)}>
      <View style={[styles.foto, { overflow: "hidden" }]}>
        {mostrarImagem ? (
          <Image
            source={fonte}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            transition={200}
            onError={() => setErroImagem(true)}
          />
        ) : (
          <Ionicons name="storefront-outline" size={36} color={colors.iconMuted} />
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>
          {barbearia.nome}
        </Text>

        <View style={styles.linha}>
          <Ionicons name="star" size={14} color={colors.star} />
          <Text style={styles.nota}>{formatarNota(barbearia.nota)}</Text>
          <Text style={styles.distancia}>
            {"  •  "}
            {formatarDistancia(barbearia.distanciaKm)}
          </Text>
        </View>

        <Text style={styles.horario}>Aberto até {barbearia.fechaAs}</Text>
      </View>
    </Pressable>
  );
}