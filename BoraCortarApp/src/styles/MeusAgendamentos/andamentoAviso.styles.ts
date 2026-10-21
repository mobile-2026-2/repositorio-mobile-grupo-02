import { StyleSheet } from "react-native";
 
export const andamentoAvisoStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  linhaStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1F9D55",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1F9D55",
  },
  mensagem: {
    fontSize: 14,
    color: "#444444",
  },
  botao: {
    height: 44,
    borderRadius: 12,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});