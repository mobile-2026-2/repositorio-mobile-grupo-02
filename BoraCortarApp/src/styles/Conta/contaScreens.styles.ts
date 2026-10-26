import { StyleSheet } from "react-native";
 
export const contaScreenStyles = StyleSheet.create({
  campos: {
    gap: 16,
  },
  carregando: {
    marginTop: 32,
  },
  secao: {
    marginTop: 8,
  },
  secaoTitulo: {
    fontSize: 14,
    color: "#6B6B6B",
    marginBottom: 8,
  },
  lista: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  nota: {
    fontSize: 13,
    lineHeight: 19,
    color: "#6B6B6B",
  },
  notaSecao: {
    marginTop: 16,
  },
  erro: {
    fontSize: 14,
    color: "#C0392B",
  },
  contatos: {
    gap: 12,
  },
  sobreTopo: {
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    marginBottom: 24,
  },
  sobreLogo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    overflow: "hidden", // recorta a logo em círculo
    marginBottom: 8,
  },
  sobreLogoImagem: {
    width: "100%",
    height: "100%",
  },
  sobreNome: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111111",
  },
  sobreVersao: {
    fontSize: 14,
    color: "#6B6B6B",
  },
  sobreTexto: {
    marginBottom: 24,
    fontSize: 15,
    lineHeight: 22,
    color: "#444444",
    textAlign: "center",
  },
  rodapeTexto: {
    marginTop: 24,
    fontSize: 12,
    color: "#9A9A9A",
    textAlign: "center",
  },
});