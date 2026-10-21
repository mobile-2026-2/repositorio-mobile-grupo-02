import { StyleSheet } from "react-native";
 
export const abasAgendamentosStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  aba: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    marginBottom: -1,
  },
  abaAtiva: {
    borderBottomColor: "#111111",
  },
  texto: {
    fontSize: 15,
    color: "#6B6B6B",
  },
  textoAtivo: {
    fontWeight: "700",
    color: "#111111",
  },
});