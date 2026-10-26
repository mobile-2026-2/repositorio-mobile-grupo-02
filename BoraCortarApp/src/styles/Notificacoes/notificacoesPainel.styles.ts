import { StyleSheet } from "react-native";
 
export const notificacoesPainelStyles = StyleSheet.create({
  // Cobre a tela inteira: tocar fora do cartão fecha o painel.
  fundo: {
    ...StyleSheet.absoluteFill,
    zIndex: 20,
    backgroundColor: "rgba(0,0,0,0.12)",
  },
  // Altura em que o cartão aparece (logo abaixo do cabeçalho da Home). Ajuste se precisar.
  cartao: {
    position: "absolute",
    top: 92,
    left: 20,
    right: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111111",
  },
  lista: {
    maxHeight: 320,
  },
  vazio: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  vazioTexto: {
    fontSize: 14,
    color: "#6B6B6B",
    textAlign: "center",
  },
  rodape: {
    alignItems: "center",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  rodapeTexto: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111111",
  },
});