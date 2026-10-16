import { StyleSheet } from "react-native";

export const abaInformacoesStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 24,
  },
  secao: {
    gap: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
  },
  linha: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  texto: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444444",
  },
  textoLinha: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#444444",
  },
  horarioLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  horarioDia: {
    fontSize: 14,
    color: "#444444",
  },
  horarioValor: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
});
