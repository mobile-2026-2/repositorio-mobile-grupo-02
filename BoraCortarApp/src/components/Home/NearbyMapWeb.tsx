import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Barbearia } from "@/types";
 
type Props = {
  barbearias: Barbearia[];
};
 
// Mapa substituto para a WEB: o react-native-maps só funciona no iOS e no Android.
export function NearbyMapWeb({ barbearias }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="map-outline" size={36} color="#9A9A9A" />
      <Text style={styles.titulo}>Mapa disponível no aplicativo</Text>
      <Text style={styles.texto}>
        {barbearias.length} {barbearias.length === 1 ? "barbearia" : "barbearias"} perto de você
      </Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    height: 170,
    marginHorizontal: 20, // mesma margem dos outros blocos da Home
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "600",
    color: "#444444",
  },
  texto: {
    fontSize: 13,
    color: "#6B6B6B",
  },
});