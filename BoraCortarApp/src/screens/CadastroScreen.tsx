import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { cadastrarUsuario, traduzirErro } from "@/services/authService";
import { styles } from "@/styles/CadastroScreenStyles";
import {
  formatarCelular,
  formatarCpf,
  validarCelular,
  validarCpf,
  validarEmail,
} from "@/utils/validators";
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

export default function CadastroScreen() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [celular, setCelular] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Retorna a mensagem do primeiro problema encontrado (ou "" se estiver tudo certo).
  function validarFormulario(): string {
    if (nome.trim().length < 3) return "Digite seu nome completo.";
    if (!validarEmail(email)) return "Digite um e-mail válido.";
    if (!validarCpf(cpf)) return "CPF inválido.";
    if (!validarCelular(celular)) return "Celular inválido. Use DDD + número.";
    if (senha.length < 6) return "A senha precisa ter no mínimo 6 caracteres.";
    if (senha !== confirmarSenha) return "As senhas não conferem.";
    return "";
  }

  async function handleCadastro() {
    if (carregando) return;

    const mensagem = validarFormulario();
    setErro(mensagem);
    if (mensagem) return;

    try {
      setCarregando(true);
      await cadastrarUsuario({ nome, email, cpf, celular, senha });
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
              <Pressable style={styles.backButton} onPress={() => router.push("/(public)/welcome")}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              </Pressable>

              <View style={styles.header}>
                <Text style={styles.title}>Criar conta</Text>
                <Text style={styles.subtitle}>Cadastre-se no BoraCortar</Text>
              </View>
            </View>

            <View style={styles.centerBlock}>
              <AppTextInput
                placeholder="Nome completo"
                autoCapitalize="words"
                value={nome}
                onChangeText={setNome}
                editable={!carregando}
              />

              <AppTextInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                editable={!carregando}
              />

              <AppTextInput
                placeholder="CPF"
                keyboardType="numeric"
                maxLength={14}
                value={cpf}
                onChangeText={(texto) => setCpf(formatarCpf(texto))}
                editable={!carregando}
              />

              <AppTextInput
                placeholder="Celular"
                keyboardType="phone-pad"
                maxLength={15}
                value={celular}
                onChangeText={(texto) => setCelular(formatarCelular(texto))}
                editable={!carregando}
              />

              <AppTextInput
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
                editable={!carregando}
              />

              <AppTextInput
                placeholder="Confirmar senha"
                secureTextEntry
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                editable={!carregando}
              />
            </View>

            <View style={styles.bottomBlock}>
              {erro !== "" && <Text style={styles.errorText}>{erro}</Text>}

              <AppButton
                label={carregando ? "Criando conta..." : "Criar conta"}
                onPress={handleCadastro}
              />

              <Pressable onPress={() => router.push("/(public)/login")}>
                <Text style={styles.link}>
                  Ja tem conta?{" "}
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
