import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { styles } from "@/styles/LoginScreenStyles";
 
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  return (
    <View
      style={[
        styles.container,
        Platform.OS === "web" && ({ minHeight: "100vh" } as any),
      ]}
    >
      <ImageBackground
        source={require("../../assets/images/FundoBarbearia2.jpeg")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
 
      <LinearGradient
        colors={["rgba(10,10,10,0.5)", "rgba(10,10,10,0.9)"]}
        style={StyleSheet.absoluteFill}
      />
 
      <StatusBar barStyle="light-content" />
 
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topBlock}>
            <Pressable style={styles.backButton} onPress={() => router.push("/(public)/welcome")}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </Pressable>
 
            <View style={styles.header}>
              <Text style={styles.title}>Entrar</Text>
              <Text style={styles.subtitle}>Acesse sua conta BoraCortar</Text>
            </View>
          </View>
 
          <View style={styles.centerBlock}>
            <AppTextInput
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
 
            <AppTextInput
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </View>
 
          <View style={styles.bottomBlock}>
            <AppButton
              label="Entrar"
              onPress={() => {
                router.push("/(private)/(tabs)");
              }}
            />
 
            <Pressable onPress={() => router.push("/(public)/cadastro")}>
              <Text style={styles.link}>
                Nao tem conta?{" "}
                <Text style={styles.linkHighlight}>Criar conta</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}