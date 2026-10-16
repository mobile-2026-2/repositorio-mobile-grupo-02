import { StyleSheet } from "react-native";

export const avaliacaoItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  corpo: {
    flex: 1,
    gap: 4,
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  autor: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
  data: {
    fontSize: 12,
    color: "#6B6B6B",
  },
  estrelas: {
    flexDirection: "row",
    gap: 2,
  },
  comentario: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444444",
  },
});
