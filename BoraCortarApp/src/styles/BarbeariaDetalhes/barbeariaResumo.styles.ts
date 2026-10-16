import { StyleSheet } from "react-native";

export const barbeariaResumoStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 8,
  },
  nome: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111111",
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  nota: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111111",
  },
  avaliacoes: {
    fontSize: 15,
    color: "#6B6B6B",
  },
  horario: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "500",
    color: "#111111",
  },
});
