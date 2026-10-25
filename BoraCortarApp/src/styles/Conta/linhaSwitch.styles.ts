import { StyleSheet } from "react-native";
 
export const linhaSwitchStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
  },
  divisor: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
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