import { StyleSheet } from "react-native";
 
export const agendarServicoScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topo: {
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    paddingBottom: 24,
  },
  vazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
  },
  vazioTexto: {
    fontSize: 16,
    color: "#444444",
    textAlign: "center",
  },
  vazioBotao: {
    backgroundColor: "#111111",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  vazioBotaoTexto: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});