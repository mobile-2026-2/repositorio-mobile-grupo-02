import React from "react";
import { View, Text, StyleSheet, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#1A1A1A", "#0D0D0D", "#000000"]} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoBlock}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="content-cut" size={40} color="#0A0A0A" />
          </View>

          <Text style={styles.title}>BoraCortar</Text>
          <Text style={styles.subtitle}>
            Conectando você as{"\n"}melhores barbearias.
          </Text>
        </View>

        <View style={styles.buttonBlock}>
          <Pressable
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </Pressable> 

          <Pressable
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressedOutline]}
            onPress={() => router.push("/(auth)/cadastro")}
          >
            <Text style={styles.secondaryButtonText}>Criar conta</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  logoBlock: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(255,255,255,0.85)",
    textAlign: "center",
    lineHeight: 22,
  },
  buttonBlock: {
    gap: 14,
  },
  primaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "rgba(255,255,255,0.7)",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.85,
  },
  pressedOutline: {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
});