import { StyleSheet } from "react-native";

export const barbeariaDetalhesScreenStyles = StyleSheet.create({
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
  // tela de "barbearia não encontrada"
  vazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  vazioTexto: {
    fontSize: 16,
    color: "#444444",
    textAlign: "center",
  },
  vazioBotao: {
    height: 44,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  vazioBotaoTexto: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
