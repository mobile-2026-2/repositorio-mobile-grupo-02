import { StyleSheet } from "react-native";
import { colors, fontSize, radius, spacing } from "@/constants/theme";

export const servicoCardStyles = StyleSheet.create({
  container: {
    width: 110,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    alignItems: "center",
    gap: spacing.sm,
  },
  nome: { fontSize: fontSize.sm, fontWeight: "600", color: colors.textPrimary },
});