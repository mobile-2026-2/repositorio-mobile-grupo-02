import AppButton from "@/components/BarbeariaDetalhes/AppButton";
import AppTextInput from "@/components/BarbeariaDetalhes/AppTextInput";
import { loginUsuario, traduzirErro } from "@/services/authService";
import { styles } from "@/styles/LoginScreenStyles";
import { validarEmail } from "@/utils/validators";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
 
  async function handleLogin() {
    if (carregando) return;
 
    if (!validarEmail(email)) {
      setErro("Digite um e-mail válido.");
      return;
    }
    if (senha.length === 0) {
      setErro("Digite sua senha.");
      return;
    }
 
    try {
      setErro("");
      setCarregando(true);
      await loginUsuario(email, senha);
      router.replace("/(private)/(tabs)");
    } catch (e) {
      setErro(traduzirErro(e));
    } finally {
      setCarregando(false);
    }
  }
 
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
                editable={!carregando}
              />
 
              <AppTextInput
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                editable={!carregando}
              />
            </View>
 
            <View style={styles.bottomBlock}>
              {erro !== "" && <Text style={styles.errorText}>{erro}</Text>}
 
              <AppButton
                label={carregando ? "Entrando..." : "Entrar"}
                onPress={handleLogin}
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