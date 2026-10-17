import { StyleSheet } from "react-native";
 
export const profissionalItemStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
    width: 72,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: "transparent",
    padding: 2,
  },
  avatarSelecionado: {
    borderColor: "#111111",
  },
  foto: {
    flex: 1,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  inicial: {
    fontSize: 20,
    fontWeight: "700",
    color: "#444444",
  },
  nome: {
    fontSize: 13,
    color: "#444444",
  },
  nomeSelecionado: {
    fontWeight: "700",
    color: "#111111",
  },
});