import { StyleSheet } from "react-native";

export const servicoItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 12,
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  info: {
    flex: 1,
    gap: 4,
  },
  nome: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
  preco: {
    fontSize: 14,
    color: "#444444",
  },
  duracao: {
    fontSize: 13,
    color: "#6B6B6B",
  },
  botao: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoSelecionado: {
    backgroundColor: "#1F9D55",
  },
});
