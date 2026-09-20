import React, { useState } from "react";
import { View, Text, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { styles } from "@/styles/LoginScreenStyles";
 
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  return (
    <LinearGradient colors={["#1A1A1A", "#0D0D0D", "#000000"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
 
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Acesse sua conta BarberPro</Text>
        </View>
 
        <View style={styles.form}>
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
 
          <AppButton
            label="Entrar"
            onPress={() => {
              // TODO: chamar a API/autenticacao aqui
            }}
          />
 
          <Pressable onPress={() => router.push("/(public)/cadastro")}>
            <Text style={styles.link}>Nao tem conta? Criar conta</Text>
          </Pressable>
 
          <Pressable onPress={() => router.back()}>
            <Text style={styles.linkSecondary}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}