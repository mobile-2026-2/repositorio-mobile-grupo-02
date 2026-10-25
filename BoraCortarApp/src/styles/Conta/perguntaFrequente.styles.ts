import { StyleSheet } from "react-native";
 
export const perguntaFrequenteStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingVertical: 16,
  },
  pergunta: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
  resposta: {
    paddingBottom: 16,
    fontSize: 14,
    lineHeight: 21,
    color: "#444444",
  },
});