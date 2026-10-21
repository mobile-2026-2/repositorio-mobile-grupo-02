import { StyleSheet } from "react-native";
 
export const filaItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
    marginTop: -1, // junta as bordas das linhas vizinhas
  },
  primeiro: {
    marginTop: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  ultimo: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  voce: {
    backgroundColor: "#EEF4FE",
    borderColor: "#9DBEF2",
    zIndex: 1, // a borda azul fica por cima das vizinhas
  },
  posicao: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
  },
  posicaoVoce: {
    backgroundColor: "#DCE8FB",
  },
  numero: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111111",
  },
  numeroVoce: {
    color: "#1D4ED8",
  },
  info: {
    flex: 1,
    gap: 4,
  },
  nome: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
  },
  servico: {
    fontSize: 13,
    color: "#6B6B6B",
  },
  servicoVoce: {
    color: "#2563EB",
  },
});