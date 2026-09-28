import { StyleSheet } from "react-native";
import { colors, fontSize, radius, spacing } from "@/constants/theme";

export const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    marginHorizontal: spacing.xl,
    marginTop: spacing.xl,
    paddingHorizontal: spacing.md + 2,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: fontSize.md,
    color: colors.textPrimary,
  },
});