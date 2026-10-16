import { StyleSheet } from "react-native";

export const agendarBarStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  botao: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoDesabilitado: {
    opacity: 0.35,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
