import { StyleSheet } from "react-native";
import { colors, fontSize, radius, spacing } from "@/constants/theme";

export const homeHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
  },
  textos: { flex: 1, paddingRight: spacing.md },
  saudacao: { fontSize: fontSize.xl, fontWeight: "700", color: colors.textPrimary },
  subtitulo: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 6,
    lineHeight: 22,
  },
  sino: { padding: spacing.xs },
  badge: {
    position: "absolute",
    top: spacing.xs,
    right: spacing.xs,
    width: 9,
    height: 9,
    borderRadius: radius.round,
    backgroundColor: colors.danger,
  },
});