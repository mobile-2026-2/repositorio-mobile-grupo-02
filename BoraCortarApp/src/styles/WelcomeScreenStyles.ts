import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24,
  },
  logoBlock: {
    alignItems: "center",
    marginBottom: 120,
  },
  logoImage: {
    width: 180,
    height: 130,
    borderRadius: 42,
    marginBottom: 33,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    fontFamily: "Newsreader_700Bold",
    color: "#FFFFFF",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
    lineHeight: 23,
  },
  buttonBlock: {
    gap: 14,
    marginTop: 130,
  },
});