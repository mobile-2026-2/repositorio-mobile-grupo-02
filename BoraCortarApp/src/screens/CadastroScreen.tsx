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
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { styles } from "@/styles/CadastroScreenStyles";

const maskCpf = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

const maskCelular = (value: string) => {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = () => {
    if (!nome || !cpf || !celular || !email || !senha || !confirmarSenha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }
    if (cpf.replace(/\D/g, "").length !== 11) {
      Alert.alert("Atenção", "CPF inválido.");
      return;
    }
    if (celular.replace(/\D/g, "").length < 10) {
      Alert.alert("Atenção", "Número de celular inválido.");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Atenção", "As senhas não coincidem.");
      return;
    }

    router.push("/(private)/(tabs)");
  };

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
              <Pressable
                style={styles.backButton}
                onPress={() => router.push("/(public)/welcome")}
              >
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              </Pressable>

              <View style={styles.header}>
                <Text style={styles.title}>Criar conta</Text>
                <Text style={styles.subtitle}>
                  Cadastre-se no BoraCortar
                </Text>
              </View>
            </View>

            <View style={styles.centerBlock}>
              <AppTextInput
                placeholder="Nome completo"
                autoCapitalize="words"
                value={nome}
                onChangeText={setNome}
              />

              <AppTextInput
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={(t) => setCpf(maskCpf(t))}
                maxLength={14}
              />

              <AppTextInput
                placeholder="Celular"
                keyboardType="phone-pad"
                value={celular}
                onChangeText={(t) => setCelular(maskCelular(t))}
                maxLength={15}
              />

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

              <AppTextInput
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            </View>

            <View style={styles.bottomBlock}>
              <AppButton label="Criar conta" onPress={handleCadastro} />

              <Pressable onPress={() => router.push("/(public)/login")}>
                <Text style={styles.link}>
                  Já tem conta?{" "}
                  <Text style={styles.linkHighlight}>Entrar</Text>
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}