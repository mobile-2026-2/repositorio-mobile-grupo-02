import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "@/styles/AppTextInputStyles";
 
export default function AppTextInput(props: TextInputProps) {
  return <TextInput style={styles.input} placeholderTextColor="rgba(255,255,255,0.4)" 
  {...props} />;
}