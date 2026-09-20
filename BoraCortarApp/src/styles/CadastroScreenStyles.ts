import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.7)",
  },
  form: {
    gap: 14,
  },
  link: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
    marginTop: 12,
  },
  linkSecondary: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
});