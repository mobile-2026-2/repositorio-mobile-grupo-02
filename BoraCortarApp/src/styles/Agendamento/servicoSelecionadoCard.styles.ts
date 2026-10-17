import { StyleSheet } from "react-native";
 
export const servicoSelecionadoCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  info: {
    flex: 1,
    gap: 6,
  },
  nome: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },
  preco: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
  duracao: {
    fontSize: 14,
    color: "#6B6B6B",
  },
  botaoEditar: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});