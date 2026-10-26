import { ItemInformacao } from "@/components/Conta/ItemInformacao";
import { TelaConta } from "@/components/Conta/TelaConta";
import { contaScreenStyles as styles } from "@/styles/Conta/contaScreens.styles";
import Constants from "expo-constants";
import { Image } from "expo-image";
import { Text, View } from "react-native";
 
export default function SobreAppScreen() {
  const versao = Constants.expoConfig?.version ?? "1.0.0";
 
  return (
    <TelaConta titulo="Sobre o app">
      <View style={styles.sobreTopo}>
        <View style={styles.sobreLogo}>
          <Image
            source={require("../../assets/images/Logo/Logo2.jpg")}
            style={styles.sobreLogoImagem}
            contentFit="cover"
          />
        </View>
        <Text style={styles.sobreNome}>BoraCortar</Text>
        <Text style={styles.sobreVersao}>Versão {versao}</Text>
      </View>
 
      <Text style={styles.sobreTexto}>
        O BoraCortar ajuda você a encontrar barbearias, agendar serviços e acompanhar a fila de espera,
        tudo pelo celular.
      </Text>
 
      <View style={styles.lista}>
        <ItemInformacao
          icone="information-circle-outline"
          titulo="Versão"
          descricao={versao}
        />
        <ItemInformacao
          icone="people-outline"
          titulo="Desenvolvimento"
          descricao="Projeto acadêmico desenvolvido pelo Grupo 02."
          ultimo
        />
      </View>
 
      <Text style={styles.rodapeTexto}>© {new Date().getFullYear()} BoraCortar</Text>
    </TelaConta>
  );
}