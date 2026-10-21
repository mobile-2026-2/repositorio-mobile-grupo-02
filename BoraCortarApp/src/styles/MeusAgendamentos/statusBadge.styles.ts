import { StyleSheet } from "react-native";
 
export const statusBadgeStyles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#FFFFFF",
  },
  tomSucesso: {
    borderColor: "#BFE5CE",
    backgroundColor: "#EAF7EF",
  },
  tomErro: {
    borderColor: "#F3C5C5",
    backgroundColor: "#FCEDED",
  },
  texto: {
    fontSize: 12,
    fontWeight: "500",
    color: "#444444",
  },
  textoSucesso: {
    color: "#1F9D55",
  },
  textoErro: {
    color: "#C0392B",
  },
});