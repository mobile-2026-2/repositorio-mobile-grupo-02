import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { CampoComRotulo } from "@/components/Conta/CampoComRotulo";
import { RodapeAcao } from "@/components/Conta/RodapeAcao";
import { TelaConta } from "@/components/Conta/TelaConta";
import { useDadosPessoais } from "@/hooks/Conta/useDadosPessoais";
import { contaScreenStyles as styles } from "@/styles/Conta/contaScreens.styles";
import { mostrarAviso } from "@/utils/dialogs";
import { formatarCelular } from "@/utils/validators";
 
export default function DadosPessoaisScreen() {
  const router = useRouter();
  const dados = useDadosPessoais();
 
  const salvar = async () => {
    const salvou = await dados.salvar();
    if (salvou) {
      mostrarAviso("Dados atualizados", "Suas informações foram salvas.", () => router.back());
    }
  };
 
  return (
    <TelaConta
      titulo="Dados pessoais"
      rodape={
        <RodapeAcao
          rotulo={dados.salvando ? "Salvando..." : "Salvar alterações"}
          habilitado={!dados.carregando}
          carregando={dados.salvando}
          onPress={salvar}
        />
      }
    >
      {dados.carregando ? (
        <ActivityIndicator style={styles.carregando} />
      ) : (
        <View style={styles.campos}>
          <CampoComRotulo
            rotulo="Nome completo"
            value={dados.nome}
            onChangeText={dados.setNome}
            autoCapitalize="words"
            editable={!dados.salvando}
          />
          <CampoComRotulo rotulo="E-mail" value={dados.email} editable={false} />
          <CampoComRotulo rotulo="CPF" value={dados.cpf} editable={false} />
          <CampoComRotulo
            rotulo="Celular"
            value={dados.celular}
            onChangeText={(texto) => dados.setCelular(formatarCelular(texto))}
            keyboardType="phone-pad"
            maxLength={15}
            editable={!dados.salvando}
          />
 
          <Text style={styles.nota}>O e-mail e o CPF não podem ser alterados.</Text>
          {dados.erro !== "" && <Text style={styles.erro}>{dados.erro}</Text>}
        </View>
      )}
    </TelaConta>
  );
}