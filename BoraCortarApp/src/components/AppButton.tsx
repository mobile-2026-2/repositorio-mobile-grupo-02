import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "@/styles/AppButtonStyles";
 
type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};
 
export default function AppButton({ label, onPress, variant = "primary" }: AppButtonProps) {
  const isPrimary = variant === "primary";
 
  return (
    <Pressable
      style={({ pressed }) => [
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        pressed && (isPrimary ? styles.pressed : styles.pressedOutline),
      ]}
      onPress={onPress}
    >
      <Text style={isPrimary ? styles.primaryButtonText : styles.secondaryButtonText}>
        {label}
      </Text>
    </Pressable>
  );
}