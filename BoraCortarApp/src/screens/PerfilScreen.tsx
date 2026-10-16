import AppButton from "@/components/BarbeariaDetalhes/AppButton";
import { useAuth } from "@/contexts/AuthContext";
import { buscarPerfil, logoutUsuario } from "@/services/authService";
import type { UsuarioDoc } from "@/services/database.types";
import { formatarCelular, formatarCpf } from "@/utils/validators";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
export default function PerfilScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const [perfil, setPerfil] = useState<UsuarioDoc | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [saindo, setSaindo] = useState(false);
 
  useEffect(() => {
    if (!user) return;
 
    let ativo = true;
    buscarPerfil(user.uid)
      .then((dados) => {
        if (ativo) setPerfil(dados);
      })
      .catch(() => {
        // Se falhar, mostramos os dados basicos do Firebase Auth abaixo.
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });
 
    return () => {
      ativo = false;
    };
  }, [user]);
 
  async function sair() {
    if (saindo) return;
    try {
      setSaindo(true);
      await logoutUsuario();
      router.replace("/(public)/welcome");
    } catch {
      Alert.alert("Erro", "Não foi possível sair da conta. Tente novamente.");
      setSaindo(false);
    }
  }
 
  function confirmarSaida() {
    Alert.alert("Sair da conta", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sair", style: "destructive", onPress: sair },
    ]);
  }
 
  const nome = perfil?.nome ?? user?.displayName ?? "Usuário";
  const email = perfil?.email ?? user?.email ?? "";
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
 
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={44} color="#FFFFFF" />
          </View>
          <Text style={styles.nome}>{nome}</Text>
          {email !== "" && <Text style={styles.email}>{email}</Text>}
        </View>
 
        {carregando ? (
          <ActivityIndicator color="#FFFFFF" style={{ marginTop: 24 }} />
        ) : (
          perfil && (
            <View style={styles.card}>
              <Linha icone="card-outline" rotulo="CPF" valor={formatarCpf(perfil.cpf)} />
              <View style={styles.divisor} />
              <Linha
                icone="call-outline"
                rotulo="Celular"
                valor={formatarCelular(perfil.celular)}
              />
            </View>
          )
        )}
 
        <View style={styles.acoes}>
          <AppButton
            label={saindo ? "Saindo..." : "Sair da conta"}
            onPress={confirmarSaida}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 
function Linha({
  icone,
  rotulo,
  valor,
}: {
  icone: keyof typeof Ionicons.glyphMap;
  rotulo: string;
  valor: string;
}) {
  return (
    <View style={styles.linha}>
      <Ionicons name={icone} size={22} color="#BDBDBD" />
      <View style={styles.linhaTexto}>
        <Text style={styles.rotulo}>{rotulo}</Text>
        <Text style={styles.valor}>{valor}</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 32,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#2A2A2A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  nome: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
  },
  email: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "#BDBDBD",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#171717",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  linhaTexto: {
    marginLeft: 14,
  },
  rotulo: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#8A8A8A",
  },
  valor: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  divisor: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#2F2F2F",
  },
  acoes: {
    marginTop: 32,
  },
});