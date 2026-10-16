import { ActivityIndicator, View } from "react-native";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
 
export default function PrivateLayout() {
  const { user, carregando } = useAuth();
 
  // Firebase ainda recuperando a sessao salva
  if (carregando) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }
 
  // Nao logado: volta para a area publica
  if (!user) return <Redirect href="/(public)/welcome" />;
 
  return <Stack screenOptions={{ headerShown: false }} />;
}