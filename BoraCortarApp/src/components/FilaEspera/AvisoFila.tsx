import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { avisoFilaStyles as styles } from "@/styles/FilaEspera/avisoFila.styles";
 
export function AvisoFila() {
  return (
    <View style={styles.container}>
      <Ionicons name="notifications-outline" size={30} color="#111111" />
      <Text style={styles.texto}>Avisaremos quando sua vez estiver próxima!</Text>
    </View>
  );
}