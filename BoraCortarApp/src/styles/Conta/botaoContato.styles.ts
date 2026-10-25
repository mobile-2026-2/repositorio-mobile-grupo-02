import { StyleSheet } from "react-native";
 
export const botaoContatoStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#111111",
    backgroundColor: "#FFFFFF",
  },
  texto: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111111",
  },
});