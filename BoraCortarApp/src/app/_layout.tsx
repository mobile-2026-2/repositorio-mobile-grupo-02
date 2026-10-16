import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  Newsreader_400Regular,
  Newsreader_700Bold,
} from "@expo-google-fonts/newsreader";
import {
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
import { AuthProvider } from "@/contexts/AuthContext";
 
// Mantem a splash screen visivel enquanto a fonte carrega
SplashScreen.preventAutoHideAsync();
 
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Newsreader_400Regular,
    Newsreader_700Bold,
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });
 
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
 
  if (!fontsLoaded) {
    // Enquanto a fonte nao carrega, nao renderiza nada (splash continua na tela)
    return null;
  }
 
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
}