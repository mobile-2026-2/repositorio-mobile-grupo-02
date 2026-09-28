import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "@/constants/theme";

export const nearbyMapStyles = StyleSheet.create({
  container: {
    height: 180,
    marginHorizontal: spacing.xl,
    marginTop: spacing.md + 2,
    borderRadius: radius.lg,
    overflow: "hidden",
    backgroundColor: colors.mapFallback,
  },
});