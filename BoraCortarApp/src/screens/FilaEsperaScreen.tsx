import React from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { DetalhesHeader } from "@/components/BarbeariaDetalhes/DetalhesHeader";
import { AvisoFila } from "@/components/FilaEspera/AvisoFila";
import { FilaResumo } from "@/components/FilaEspera/FilaResumo";
import { ListaFila } from "@/components/FilaEspera/ListaFila";
import { useBarbeariaDetalhes } from "@/hooks/BarbeariaDetalhes/useBarbeariaDetalhes";
import { useFilaEspera } from "@/hooks/FilaEspera/useFilaEspera";
import { filaEsperaScreenStyles as styles } from "@/styles/FilaEspera/filaEsperaScreen.styles";
 
type Props = {
  agendamentoId?: string;
};
 
export default function FilaEsperaScreen({ agendamentoId }: Props) {
  const router = useRouter();
  const { agendamento, fila, carregando, erro, carregar } = useFilaEspera(agendamentoId);
  const { detalhes } = useBarbeariaDetalhes(agendamento?.barbeariaId); // so para pegar a logo
 
  const voltar = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate("/(private)/(tabs)/Agendamentos");
    }
  };
 
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.topo}>
        <DetalhesHeader titulo="Fila de espera" onVoltar={voltar} />
      </SafeAreaView>
 
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        {carregando ? (
          <View style={styles.centro}>
            <ActivityIndicator />
          </View>
        ) : erro !== "" || !fila || !agendamento ? (
          <View style={styles.centro}>
            <Text style={styles.mensagem}>{erro || "Não foi possível carregar a fila."}</Text>
            <Pressable style={styles.botaoTentar} onPress={carregar}>
              <Text style={styles.botaoTentarTexto}>Tentar de novo</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <FilaResumo
              nome={agendamento.barbeariaNome}
              logo={detalhes?.logo}
              tempoEsperaMin={fila.tempoEsperaMin}
            />
            <ListaFila itens={fila.itens} />
            <AvisoFila />
          </>
        )}
      </ScrollView>
    </View>
  );
}