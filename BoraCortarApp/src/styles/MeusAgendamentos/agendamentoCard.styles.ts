import { StyleSheet } from "react-native";
 
export const agendamentoCardStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    padding: 16,
    gap: 14,
    backgroundColor: "#FFFFFF",
  },
  topo: {
    flexDirection: "row",
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 14,
    color: "#444444",
  },
  data: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B6B6B",
  },
  profissional: {
    fontSize: 14,
    color: "#6B6B6B",
  },
  botaoFila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#111111",
    backgroundColor: "#FFFFFF",
  },
  botaoFilaTexto: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111111",
  },
  rodape: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cancelar: {
    fontSize: 13,
    fontWeight: "500",
    color: "#C0392B",
  },
});