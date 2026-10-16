import { StyleSheet } from "react-native";

export const abasDetalhesStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
  },
  aba: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginBottom: -1, // a linha da aba ativa cobre a linha cinza do container
  },
  abaAtiva: {
    borderBottomColor: "#111111",
  },
  texto: {
    fontSize: 15,
    color: "#6B6B6B",
  },
  textoAtivo: {
    color: "#111111",
    fontWeight: "600",
  },
});
