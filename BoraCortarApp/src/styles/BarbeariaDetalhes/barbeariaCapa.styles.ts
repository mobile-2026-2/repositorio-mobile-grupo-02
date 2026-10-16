import { StyleSheet } from "react-native";

export const barbeariaCapaStyles = StyleSheet.create({
  // marginBottom abre espaço para a parte da logo que "sai" da foto
  container: {
    marginBottom: 52,
  },
  capa: {
    height: 170,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logo: {
    position: "absolute",
    left: 20,
    bottom: -48,
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
