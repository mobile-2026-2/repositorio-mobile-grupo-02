import React from "react";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { buscaExplorarStyles as styles } from "@/styles/Explorar/buscaExplorar.styles";
 
type Props = {
  valor: string;
  onChange: (texto: string) => void;
};
 
export function BuscaExplorar({ valor, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#6B6B6B" />
 
      <TextInput
        style={styles.input}
        placeholder="Buscar barbearias, cidades ou bairros"
        placeholderTextColor="#8A8A8A"
        value={valor}
        onChangeText={onChange}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="never"
      />
 
      {valor !== "" && (
        <Pressable onPress={() => onChange("")} accessibilityLabel="Limpar busca" hitSlop={8}>
          <Ionicons name="close-circle" size={20} color="#9A9A9A" />
        </Pressable>
      )}
    </View>
  );
}