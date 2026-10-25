import React, { useState } from "react";
import { Linking, Pressable, ScrollView, Share, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { AbaAvaliacoes } from "@/components/BarbeariaDetalhes/AbaAvaliacoes";
import { AbaInformacoes } from "@/components/BarbeariaDetalhes/AbaInformacoes";
import { AbaServicos } from "@/components/BarbeariaDetalhes/AbaServicos";
import { AbasDetalhes } from "@/components/BarbeariaDetalhes/AbasDetalhes";
import { AcoesRapidas } from "@/components/BarbeariaDetalhes/AcoesRapidas";
import { AgendarBar } from "@/components/BarbeariaDetalhes/AgendarBar";
import { BarbeariaCapa } from "@/components/BarbeariaDetalhes/BarbeariaCapa";
import { BarbeariaResumo } from "@/components/BarbeariaDetalhes/BarbeariaResumo";
import { DetalhesHeader } from "@/components/BarbeariaDetalhes/DetalhesHeader";
import { useBarbeariaDetalhes } from "@/hooks/BarbeariaDetalhes/useBarbeariaDetalhes";
import { useSelecaoServicos } from "@/hooks/BarbeariaDetalhes/useSelecaoServicos";
import { barbeariaDetalhesScreenStyles as styles } from "@/styles/BarbeariaDetalhes/barbeariaDetalhesScreen.styles";
import { AbaDetalhes } from "@/types/barbeariaDetalhes";
import { mostrarAviso } from "@/utils/dialogs";
import { apenasDigitos } from "@/utils/detalhesFormatters";
 
type Props = {
  id?: string;
};
 
export default function BarbeariaDetalhesScreen({ id }: Props) {
  const router = useRouter();
  const { barbearia, detalhes, servicos, avaliacoes } = useBarbeariaDetalhes(id);
  const selecao = useSelecaoServicos(servicos);
  const [aba, setAba] = useState<AbaDetalhes>("servicos");
  const [favorito, setFavorito] = useState(false);
 
  const voltar = () => {
    // Se a tela foi aberta direto (sem histórico), volta para a Home.
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/(private)/(tabs)");
    }
  };
 
  // Id inválido: mostra um aviso em vez de quebrar o app.
  if (!barbearia || !detalhes) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.vazio}>
          <Text style={styles.vazioTexto}>Barbearia não encontrada.</Text>
          <Pressable style={styles.vazioBotao} onPress={voltar}>
            <Text style={styles.vazioBotaoTexto}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
 
  const ligar = () => {
    Linking.openURL(`tel:${apenasDigitos(detalhes.telefone)}`).catch(() =>
      mostrarAviso("Ligar", "Não foi possível abrir o discador neste aparelho.")
    );
  };
 
  const abrirRota = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${barbearia.latitude},${barbearia.longitude}`;
    Linking.openURL(url).catch(() => mostrarAviso("Rota", "Não foi possível abrir o mapa."));
  };
 
  const compartilhar = () => {
    Share.share({ message: `Conheça a ${barbearia.nome} no BoraCortar!` }).catch(() => {});
  };
 
  // Abre a tela "Agendar serviço" levando a barbearia e os serviços escolhidos.
  const agendar = () => {
    router.push({
      pathname: "/(private)/agendar",
      params: {
        barbeariaId: barbearia.id,
        servicos: selecao.escolhidos.map((s) => s.id).join(","),
      },
    });
  };
 
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["top"]} style={styles.topo}>
        <DetalhesHeader titulo="Detalhes da barbearia" onVoltar={voltar} onCompartilhar={compartilhar} />
      </SafeAreaView>
 
      <ScrollView contentContainerStyle={styles.conteudo} showsVerticalScrollIndicator={false}>
        <BarbeariaCapa capa={detalhes.capa} logo={detalhes.logo} />
 
        <BarbeariaResumo
          nome={barbearia.nome}
          nota={barbearia.nota}
          totalAvaliacoes={detalhes.totalAvaliacoes}
          fechaAs={barbearia.fechaAs}
        />
 
        <AcoesRapidas
          favorito={favorito}
          onLigar={ligar}
          onRota={abrirRota}
          onFavoritar={() => setFavorito((atual) => !atual)}
          onCompartilhar={compartilhar}
        />
 
        <AbasDetalhes atual={aba} onChange={setAba} />
 
        {aba === "servicos" && (
          <AbaServicos servicos={servicos} selecionados={selecao.selecionados} onAlternar={selecao.alternar} />
        )}
        {aba === "informacoes" && <AbaInformacoes detalhes={detalhes} />}
        {aba === "avaliacoes" && <AbaAvaliacoes avaliacoes={avaliacoes} />}
      </ScrollView>
 
      <AgendarBar quantidade={selecao.quantidade} total={selecao.total} onPress={agendar} />
    </View>
  );
}