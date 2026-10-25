import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { DetalhesHeader } from "@/components/BarbeariaDetalhes/DetalhesHeader";
import { telaContaStyles as styles } from "@/styles/Conta/telaConta.styles";
 
type Props = {
  titulo: string;
  children: ReactNode;
  rodape?: ReactNode; // ex.: botão fixo embaixo
};
 
/** Moldura das telas do menu do perfil: cabeçalho com voltar + conteúdo rolável. */
export function TelaConta({ titulo, children, rodape }: Props) {
  const router = useRouter();
 
  const voltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(private)/(tabs)/Perfil");
    }
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView edges={["top"]} style={styles.topo}>
        <DetalhesHeader titulo={titulo} onVoltar={voltar} />
      </SafeAreaView>
 
      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
 
      {rodape}
    </KeyboardAvoidingView>
  );
}