import React from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { acoesRapidasStyles as styles } from "@/styles/BarbeariaDetalhes/acoesRapidas.styles";
 
type Props = {
  favorito: boolean;
  onLigar: () => void;
  onRota: () => void;
  onFavoritar: () => void;
  onCompartilhar: () => void;
};
 
export function AcoesRapidas({ favorito, onLigar, onRota, onFavoritar, onCompartilhar }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.acao} onPress={onLigar} accessibilityLabel="Ligar">
        <Ionicons name="call-outline" size={24} color="#111111" />
        <Text style={styles.rotulo}>Ligar</Text>
      </Pressable>
 
      <Pressable style={styles.acao} onPress={onRota} accessibilityLabel="Rota">
        <Ionicons name="navigate-outline" size={24} color="#111111" />
        <Text style={styles.rotulo}>Rota</Text>
      </Pressable>
 
      <Pressable
        style={styles.acao}
        onPress={onFavoritar}
        accessibilityLabel={favorito ? "Remover dos favoritos" : "Favoritar"}
      >
        <Ionicons
          name={favorito ? "heart" : "heart-outline"}
          size={24}
          color={favorito ? "#E53935" : "#111111"}
        />
        <Text style={styles.rotulo}>Favoritar</Text>
      </Pressable>
 
      <Pressable style={styles.acao} onPress={onCompartilhar} accessibilityLabel="Compartilhar">
        <Ionicons name="share-outline" size={24} color="#111111" />
        <Text style={styles.rotulo}>Compartilhar</Text>
      </Pressable>
    </View>
  );
}