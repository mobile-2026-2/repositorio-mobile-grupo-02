import { Redirect } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

export default function Index() {
  const { user, carregando } = useAuth();

  // Espera o Firebase recuperar a sessao salva antes de decidir.
  if (carregando) return null;

  return user ? <Redirect href="/(private)/(tabs)" /> : <Redirect href="/(public)/welcome" />;
}
