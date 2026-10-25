import React from "react";
import { Linking, Text, View } from "react-native";
import { BotaoContato } from "@/components/Conta/BotaoContato";
import { PerguntaFrequente } from "@/components/Conta/PerguntaFrequente";
import { TelaConta } from "@/components/Conta/TelaConta";
import { CONTATO_SUPORTE, PERGUNTAS_FREQUENTES } from "@/constants/Conta/conteudo";
import { contaScreenStyles as styles } from "@/styles/Conta/contaScreens.styles";
import { mostrarAviso } from "@/utils/dialogs";
 
export default function AjudaSuporteScreen() {
  const abrir = (url: string, nome: string) => {
    Linking.openURL(url).catch(() =>
      mostrarAviso(nome, `Não foi possível abrir o ${nome.toLowerCase()} neste aparelho.`)
    );
  };
 
  return (
    <TelaConta titulo="Ajuda e suporte">
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Perguntas frequentes</Text>
        <View>
          {PERGUNTAS_FREQUENTES.map((item) => (
            <PerguntaFrequente key={item.id} pergunta={item.pergunta} resposta={item.resposta} />
          ))}
        </View>
      </View>
 
      <View style={[styles.secao, styles.notaSecao]}>
        <Text style={styles.secaoTitulo}>Fale com a gente</Text>
        <View style={styles.contatos}>
          <BotaoContato
            icone="mail-outline"
            rotulo="Enviar e-mail"
            onPress={() =>
              abrir(`mailto:${CONTATO_SUPORTE.email}?subject=Ajuda%20BoraCortar`, "E-mail")
            }
          />
          <BotaoContato
            icone="logo-whatsapp"
            rotulo="Chamar no WhatsApp"
            onPress={() => abrir(`https://wa.me/${CONTATO_SUPORTE.whatsapp}`, "WhatsApp")}
          />
        </View>
      </View>
    </TelaConta>
  );
}