import React from "react";
import { ActivityIndicator, Pressable, RefreshControl, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, type Href } from "expo-router";
import { DetalhesHeader } from "@/components/BarbeariaDetalhes/DetalhesHeader";
import { AbasAgendamentos } from "@/components/MeusAgendamentos/AbasAgendamentos";
import { ListaAgendamentos } from "@/components/MeusAgendamentos/ListaAgendamentos";
import { useMeusAgendamentos } from "@/hooks/MeusAgendamentos/useMeusAgendamentos";
import { traduzirErro } from "@/services/authService";
import type { AgendamentoDoc } from "@/services/database.types";
import { agendamentosScreenStyles as styles } from "@/styles/MeusAgendamentos/agendamentosScreen.styles";
import { mostrarAviso, pedirConfirmacao } from "@/utils/dialogs";
import { formatarDataCompleta } from "@/utils/meusAgendamentosFormatters";
 
export default function AgendamentosScreen() {
  const router = useRouter();
  const meus = useMeusAgendamentos();
 
  const lista = meus.aba === "proximos" ? meus.proximos : meus.historico;
  const mensagemVazia =
    meus.aba === "proximos"
      ? "Você não tem agendamentos próximos."
      : "Seu histórico de agendamentos está vazio.";
 
  // Abre a tela de fila de espera da barbearia desse agendamento.
  const verFila = (agendamento: AgendamentoDoc) => {
    router.push({
      pathname: "/(private)/fila" as Href,
      params: { agendamentoId: agendamento.id },
    });
  };
 
  const cancelar = (agendamento: AgendamentoDoc) => {
    pedirConfirmacao({
      titulo: "Cancelar agendamento",
      mensagem: `Deseja cancelar ${agendamento.servicoNome} em ${formatarDataCompleta(agendamento.data.toDate())}?`,
      textoConfirmar: "Cancelar agendamento",
      destrutivo: true,
      aoConfirmar: async () => {
        try {
          await meus.cancelar(agendamento);
        } catch (erro) {
          mostrarAviso("Não foi possível cancelar", traduzirErro(erro));
        }
      },
    });
  };
 
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.topo}>
        <DetalhesHeader titulo="Meus agendamentos" onVoltar={() => router.navigate("/(private)/(tabs)")} />
      </SafeAreaView>
 
      <AbasAgendamentos atual={meus.aba} onChange={meus.setAba} />
 
      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={meus.atualizando} onRefresh={meus.atualizar} />}
      >
        {meus.carregando ? (
          <View style={styles.centro}>
            <ActivityIndicator />
          </View>
        ) : meus.erro !== "" ? (
          <View style={styles.centro}>
            <Text style={styles.mensagem}>{meus.erro}</Text>
            <Pressable style={styles.botaoTentar} onPress={meus.carregar}>
              <Text style={styles.botaoTentarTexto}>Tentar de novo</Text>
            </Pressable>
          </View>
        ) : (
          <ListaAgendamentos
            agendamentos={lista}
            mensagemVazia={mensagemVazia}
            onVerFila={verFila}
            onCancelar={cancelar}
          />
        )}
      </ScrollView>
    </View>
  );
}