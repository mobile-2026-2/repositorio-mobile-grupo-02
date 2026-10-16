import { StyleSheet } from "react-native";

export const detalhesHeaderStyles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
  },
  botao: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    flex: 1,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#111111",
  },
});
