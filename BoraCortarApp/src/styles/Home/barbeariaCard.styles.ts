import { StyleSheet } from "react-native";
import { colors, fontSize, radius, spacing } from "@/constants/theme";

export const barbeariaCardStyles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  foto: {
    height: 110,
    backgroundColor: colors.surfaceMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  info: { padding: spacing.md },
  nome: { fontSize: fontSize.md, fontWeight: "700", color: colors.textPrimary },
  linha: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  nota: {
    fontSize: fontSize.sm,
    fontWeight: "600",
    color: colors.textPrimary,
    marginLeft: spacing.xs,
  },
  distancia: { fontSize: fontSize.sm, color: colors.textMuted },
  horario: { fontSize: fontSize.xs, color: colors.textMuted, marginTop: spacing.sm },
});