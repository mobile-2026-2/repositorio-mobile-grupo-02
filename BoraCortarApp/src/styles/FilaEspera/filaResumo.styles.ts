import { StyleSheet } from "react-native";
 
export const filaResumoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  rotulo: {
    fontSize: 13,
    color: "#6B6B6B",
  },
  tempo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
  },
});