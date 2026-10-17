import { StyleSheet } from "react-native";
 
export const diaItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 12,
  },
  selecionado: {
    backgroundColor: "#111111",
  },
  diaSemana: {
    fontSize: 12,
    color: "#6B6B6B",
  },
  numero: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },
  textoSelecionado: {
    color: "#FFFFFF",
  },
});