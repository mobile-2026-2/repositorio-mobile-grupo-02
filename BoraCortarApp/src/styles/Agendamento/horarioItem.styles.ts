import { StyleSheet } from "react-native";
 
export const horarioItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  selecionado: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },
  desabilitado: {
    backgroundColor: "#F5F5F5",
  },
  texto: {
    fontSize: 15,
    fontWeight: "500",
    color: "#111111",
  },
  textoSelecionado: {
    color: "#FFFFFF",
  },
  textoDesabilitado: {
    color: "#B0B0B0",
  },
});