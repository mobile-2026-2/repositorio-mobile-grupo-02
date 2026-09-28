import { StyleSheet } from "react-native";
import { colors, fontSize, spacing } from "@/constants/theme";

export const sectionHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xxl,
  },
  titulo: { fontSize: fontSize.lg, fontWeight: "700", color: colors.textPrimary },
  acao: { fontSize: 14, fontWeight: "600", color: colors.textPrimary },
});