import { StyleSheet } from "react-native";
import { spacing } from "@/constants/theme";

export const horizontalListStyles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md + 2,
  },
  separator: { width: spacing.md },
});