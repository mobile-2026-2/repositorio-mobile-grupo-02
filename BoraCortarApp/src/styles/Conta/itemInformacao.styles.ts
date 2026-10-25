import { StyleSheet } from "react-native";
 
export const itemInformacaoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 16,
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  icone: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    justifyContent: "center",
  },
  textos: {
    flex: 1,
    gap: 3,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
  descricao: {
    fontSize: 13,
    color: "#6B6B6B",
    lineHeight: 18,
  },
});