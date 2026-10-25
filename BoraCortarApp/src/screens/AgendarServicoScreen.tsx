import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ConfirmarAgendamentoBar } from "@/components/Agendamento/ConfirmarAgendamentoBar";
import { SecaoAgendamento } from "@/components/Agendamento/SecaoAgendamento";
import { SeletorData } from "@/components/Agendamento/SeletorData";
import { SeletorHorario } from "@/components/Agendamento/SeletorHorario";
import { SeletorProfissional } from "@/components/Agendamento/SeletorProfissional";
import { ServicoSelecionadoCard } from "@/components/Agendamento/ServicoSelecionadoCard";
import { DetalhesHeader } from "@/components/BarbeariaDetalhes/DetalhesHeader";
import { useAgendamento } from "@/hooks/Agendamento/useAgendamento";
import { useBarbeariaDetalhes } from "@/hooks/BarbeariaDetalhes/useBarbeariaDetalhes";
import { criarAgendamento } from "@/services/Agendamentosservice";
import { traduzirErro } from "@/services/authService";
import { agendarServicoScreenStyles as styles } from "@/styles/Agendamento/agendarServicoScreen.styles";
import { formatarDataHora, resumirServicos } from "@/utils/agendamentoFormatters";
import { mostrarAviso } from "@/utils/dialogs";
 
type Props = {
  barbeariaId?: string;
  servicosIds?: string[];
};
 
export default function AgendarServicoScreen({ barbeariaId, servicosIds = [] }: Props) {
  const router = useRouter();
  const { barbearia, servicos } = useBarbeariaDetalhes(barbeariaId);
  const agendamento = useAgendamento(barbeariaId);
  const [enviando, setEnviando] = useState(false);
 
  const escolhidos = servicos.filter((s) => servicosIds.includes(s.id));
 
  const voltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(private)/(tabs)");
    }
  };
 
  // Chegou sem barbearia ou sem serviço: avisa em vez de quebrar.
  if (!barbearia || escolhidos.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.vazio}>
          <Text style={styles.vazioTexto}>Nenhum serviço selecionado para agendar.</Text>
          <Pressable style={styles.vazioBotao} onPress={voltar}>
            <Text style={styles.vazioBotaoTexto}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
 
  const resumo = resumirServicos(escolhidos);
 
  const confirmar = async () => {
    if (!agendamento.dataHora || enviando) return;
 
    try {
      setEnviando(true);
      await criarAgendamento(
        { id: barbearia.id, nome: barbearia.nome },
        resumo,
        agendamento.dataHora,
        { id: agendamento.profissional.id, nome: agendamento.profissional.nome }
      );
 
      mostrarAviso(
        "Agendamento confirmado",
        `${resumo.nome}\n${agendamento.profissional.nome} • ${formatarDataHora(agendamento.dataHora)}`,
        () => router.replace("/(private)/(tabs)/Agendamentos")
      );
    } catch (erro) {
      const temCodigo = Boolean((erro as { code?: string })?.code);
      const mensagem = !temCodigo && erro instanceof Error ? erro.message : traduzirErro(erro);
      mostrarAviso("Não foi possível agendar", mensagem);
    } finally {
      setEnviando(false);
    }
  };
 
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.topo}>
        <DetalhesHeader titulo="Agendar serviço" onVoltar={voltar} />
      </SafeAreaView>
 
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        <SecaoAgendamento titulo="Serviço selecionado">
          <ServicoSelecionadoCard
            nome={resumo.nome}
            preco={resumo.preco}
            duracaoMin={resumo.duracaoMin}
            onEditar={voltar}
          />
        </SecaoAgendamento>
 
        <SecaoAgendamento titulo="Selecione o profissional">
          <SeletorProfissional
            profissionais={agendamento.profissionais}
            selecionadoId={agendamento.profissional.id}
            onSelecionar={agendamento.escolherProfissional}
          />
        </SecaoAgendamento>
 
        <SecaoAgendamento titulo="Selecione a data">
          <SeletorData
            dias={agendamento.dias}
            selecionada={agendamento.chaveDia}
            onSelecionar={agendamento.escolherDia}
          />
        </SecaoAgendamento>
 
        <SecaoAgendamento titulo="Selecione o horário">
          <SeletorHorario
            horarios={agendamento.horarios}
            selecionado={agendamento.hora}
            onSelecionar={agendamento.escolherHora}
          />
        </SecaoAgendamento>
      </ScrollView>
 
      <ConfirmarAgendamentoBar
        habilitado={agendamento.dataHora !== null}
        carregando={enviando}
        onPress={confirmar}
      />
    </View>
  );
}