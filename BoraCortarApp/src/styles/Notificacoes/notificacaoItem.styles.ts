import { StyleSheet } from "react-native";
 
export const notificacaoItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
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
  iconeFila: {
    backgroundColor: "#EAF7EF",
  },
  textos: {
    flex: 1,
    gap: 3,
  },
  titulo: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
  },
  mensagem: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6B6B6B",
  },
});