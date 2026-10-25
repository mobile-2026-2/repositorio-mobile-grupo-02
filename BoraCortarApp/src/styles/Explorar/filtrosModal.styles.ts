import { StyleSheet } from "react-native";
 
export const filtrosModalStyles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "flex-end",
  },
  sombra: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  folha: {
    width: "100%",
    maxWidth: 480,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 32,
    gap: 12,
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    height: 52,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
  },
  opcaoAtiva: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },
  opcaoTexto: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#111111",
  },
  opcaoTextoAtivo: {
    color: "#FFFFFF",
  },
});