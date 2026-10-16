import AppButton from "@/components/BarbeariaDetalhes/AppButton";
import { styles } from "@/styles/WelcomeScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
const { height } = Dimensions.get("window");
 
export default function WelcomeScreen() {
  const router = useRouter();
 
  return (
    <View style={[styles.container, { minHeight: height }]}>
      <ImageBackground
        source={require("../../assets/images/FundoBarbearia2.jpeg")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
 
      <LinearGradient
        colors={["rgba(10,10,10,0.4)", "rgba(10,10,10,0.85)"]}
        style={StyleSheet.absoluteFill}
      />
 
      <StatusBar barStyle="light-content" />
 
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoBlock}>
          <Image
            source={require("../../assets/images/LogoImage.png")}
            style={styles.logoImage}
          />
 
          <Text style={styles.title}>BoraCortar</Text>
          <Text style={styles.subtitle}>
            Conectando você às {"\n"} melhores barbearias.
          </Text>
        </View>
 
        <View style={styles.buttonBlock}>
          <AppButton label="Entrar" onPress={() => router.push("/(public)/login")} />
          <AppButton
            label="Criar conta"
            variant="secondary"
            onPress={() => router.push("/(public)/cadastro")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}