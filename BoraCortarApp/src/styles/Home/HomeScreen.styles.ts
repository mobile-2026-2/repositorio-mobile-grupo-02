import { StyleSheet } from "react-native";
import { colors, spacing } from "@/constants/theme";

export const homeScreenStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: spacing.xl + spacing.md },
});