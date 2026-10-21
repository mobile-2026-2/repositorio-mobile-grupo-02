import { StyleSheet } from "react-native";
 
export const filaEsperaScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topo: {
    backgroundColor: "#FFFFFF",
  },
  conteudo: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  centro: {
    marginTop: 48,
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 24,
  },
  mensagem: {
    fontSize: 15,
    color: "#6B6B6B",
    textAlign: "center",
  },
  botaoTentar: {
    backgroundColor: "#111111",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  botaoTentarTexto: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});