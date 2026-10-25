import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { LinhaSwitch } from "@/components/Conta/LinhaSwitch";
import { TelaConta } from "@/components/Conta/TelaConta";
import { usePreferenciasNotificacoes } from "@/hooks/Conta/usePreferenciasNotificacoes";
import { contaScreenStyles as styles } from "@/styles/Conta/contaScreens.styles";
 
export default function NotificacoesScreen() {
  const { preferencias, carregando, alternar } = usePreferenciasNotificacoes();
 
  return (
    <TelaConta titulo="Notificações">
      {carregando ? (
        <ActivityIndicator style={styles.carregando} />
      ) : (
        <>
          <View style={styles.lista}>
            <LinhaSwitch
              titulo="Lembretes de agendamento"
              descricao="Receba um lembrete antes do horário marcado."
              valor={preferencias.lembretes}
              onChange={() => alternar("lembretes")}
            />
            <LinhaSwitch
              titulo="Fila de espera"
              descricao="Avise quando a sua vez estiver chegando."
              valor={preferencias.fila}
              onChange={() => alternar("fila")}
            />
            <LinhaSwitch
              titulo="Novidades e promoções"
              descricao="Ofertas e novidades das barbearias."
              valor={preferencias.promocoes}
              onChange={() => alternar("promocoes")}
              ultimo
            />
          </View>
 
          <Text style={[styles.nota, styles.notaSecao]}>
            Suas preferências ficam salvas neste aparelho.
          </Text>
        </>
      )}
    </TelaConta>
  );
}