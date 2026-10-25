import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { perguntaFrequenteStyles as styles } from "@/styles/Conta/perguntaFrequente.styles";
 
type Props = {
  pergunta: string;
  resposta: string;
};
 
export function PerguntaFrequente({ pergunta, resposta }: Props) {
  const [aberta, setAberta] = useState(false);
 
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.cabecalho}
        onPress={() => setAberta((atual) => !atual)}
        accessibilityRole="button"
        accessibilityState={{ expanded: aberta }}
      >
        <Text style={styles.pergunta}>{pergunta}</Text>
        <Ionicons name={aberta ? "chevron-up" : "chevron-down"} size={20} color="#6B6B6B" />
      </Pressable>
 
      {aberta && <Text style={styles.resposta}>{resposta}</Text>}
    </View>
  );
}