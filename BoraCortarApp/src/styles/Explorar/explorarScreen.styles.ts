import { StyleSheet } from "react-native";
 
export const explorarScreenStyles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 32,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
    paddingHorizontal: 20,
    paddingTop: 16,
    marginBottom: 16,
  },
  mapaArea: {
    marginTop: 16,
  },
  filtrarPosicao: {
    position: "absolute",
    right: 36,
    bottom: 16,
  },
  vazio: {
    marginTop: 8,
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#6B6B6B",
    textAlign: "center",
  },
});