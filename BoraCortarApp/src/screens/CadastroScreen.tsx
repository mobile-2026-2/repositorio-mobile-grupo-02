import React, { useState } from "react";
import { View, Text, Pressable, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { styles } from "@/styles/CadastroScreenStyles";
 
export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
 
  return (
    <LinearGradient colors={["#1A1A1A", "#0D0D0D", "#000000"]} style={styles.container}>
      <StatusBar barStyle="light-content" />
 
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Criar conta</Text>
          <Text style={styles.subtitle}>Cadastre-se no BarberPro</Text>
        </View>
 
        <View style={styles.form}>
          <AppTextInput placeholder="Nome completo" value={nome} onChangeText={setNome} />
 
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
            label="Criar conta"
            onPress={() => {
              // TODO: chamar a API de cadastro aqui
            }}
          />
 
          <Pressable onPress={() => router.push("/(public)/login")}>
            <Text style={styles.link}>Ja tem conta? Entrar</Text>
          </Pressable>
 
          <Pressable onPress={() => router.back()}>
            <Text style={styles.linkSecondary}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}