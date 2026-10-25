import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { usePerfil } from "@/hooks/Perfil/usePerfil";
import { logoutUsuario } from "@/services/authService";
import { styles } from "@/styles/Perfil/ProfileScreenStyles";
import { mostrarAviso } from "@/utils/dialogs";
 
// Opções do menu separadas do JSX para facilitar a manutenção
const OPTIONS = [
  { key: "dados", label: "Dados pessoais", icon: "person-outline" },
  { key: "pagamento", label: "Formas de pagamento", icon: "card-outline" },
  { key: "notificacoes", label: "Notificações", icon: "notifications-outline" },
  { key: "ajuda", label: "Ajuda e suporte", icon: "help-circle-outline" },
  { key: "sobre", label: "Sobre o app", icon: "information-circle-outline" },
] as const;
 
export default function ProfileScreen() {
  const router = useRouter();
  const { nome, email } = usePerfil();
  const [saindo, setSaindo] = useState(false);
 
  function handleOptionPress(key: string) {
    // TODO: navegar para a tela de cada opção
    console.log("Opção pressionada:", key);
  }
 
  async function handleLogout() {
    if (saindo) return;
    try {
      setSaindo(true);
      await logoutUsuario(); // encerra a sessão no Firebase
      router.replace("/(public)/welcome");
    } catch {
      mostrarAviso("Erro", "Não foi possível sair da conta. Tente novamente.");
      setSaindo(false);
    }
  }
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.screenTitle}>Meu perfil</Text>
 
        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={48} color="#9A9A9A" />
            </View>
            <Pressable style={styles.editAvatarButton}>
              <Ionicons name="camera-outline" size={16} color="#FFFFFF" />
            </Pressable>
          </View>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
 
        <View style={styles.optionsList}>
          {OPTIONS.map((option) => (
            <Pressable
              key={option.key}
              style={styles.optionRow}
              onPress={() => handleOptionPress(option.key)}
            >
              <Ionicons
                name={option.icon}
                size={20}
                color="#111111"
                style={styles.optionIcon}
              />
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9A9A9A" />
            </Pressable>
          ))}
 
          <Pressable style={styles.logoutRow} onPress={handleLogout} disabled={saindo}>
            <Ionicons name="log-out-outline" size={20} color="#E74C3C" />
            <Text style={styles.logoutLabel}>{saindo ? "Saindo..." : "Sair"}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}