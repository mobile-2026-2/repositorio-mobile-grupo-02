import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, type Href } from "expo-router";
 
import { HomeHeader } from "../components/Home/HomeHeader";
import { SearchBar } from "@/components/Home/SearchBar";
import { SectionHeader } from "@/components/Home/SectionHeader";
import { NearbyMap } from "@/components/Home/NearbyMapSwitch";
import { HorizontalList } from "@/components/Home/HorizontalList";
import { BarbeariaCard } from "@/components/Home/BarbeariaCard";
import { ServicoCard } from "@/components/Home/ServicoCard";
import { NotificacoesPainel } from "@/components/Notificacoes/NotificacoesPainel";
import { useHomeData } from "@/hooks/Home/useHomeDate";
import { useNotificacoes } from "@/hooks/Notificacoes/useNotificacoes";
import { homeScreenStyles as styles } from "@/styles/Home/HomeScreen.styles";
import { useAuth } from "@/contexts/AuthContext";
import type { Notificacao } from "@/types/notificacoes";
 
export default function HomeScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const { barbearias, servicos } = useHomeData();
  const { notificacoes, naoLidas, marcarComoVistas } = useNotificacoes();
  const [painelAberto, setPainelAberto] = useState(false);
 
  // Primeiro nome de quem logou (displayName foi salvo no cadastro)
  const nomeUsuario = user?.displayName?.split(" ")[0] ?? "";
 
  const abrirPainel = () => {
    setPainelAberto(true);
    marcarComoVistas(); // o pontinho vermelho do sino some
  };
 
  // Tocar numa notificação leva para a tela relacionada.
  const abrirNotificacao = (notificacao: Notificacao) => {
    setPainelAberto(false);
 
    if (notificacao.tipo === "fila") {
      router.push(
        `/(private)/fila?agendamentoId=${encodeURIComponent(notificacao.agendamentoId)}` as Href
      );
    } else {
      router.navigate("/(private)/(tabs)/Agendamentos");
    }
  };
 
  const gerenciarNotificacoes = () => {
    setPainelAberto(false);
    router.push("/(private)/conta/notificacoes" as Href);
  };
 
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          nomeUsuario={nomeUsuario}
          temNotificacoesNovas={naoLidas > 0}
          onNotificacoesPress={abrirPainel}
        />
        <SearchBar />
 
        <SectionHeader
          titulo="Próximas de você"
          acaoLabel="Ver todas"
          onAcaoPress={() => router.push("/(private)/(tabs)/Explorar")}
        />
        <NearbyMap barbearias={barbearias} />
 
        <SectionHeader titulo="Barbearias em destaque" />
        <HorizontalList
          data={barbearias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BarbeariaCard
              barbearia={item}
              onPress={(b) => router.push(`/(private)/barbearia/${b.id}`)}
            />
          )}
        />
 
        <SectionHeader titulo="Serviços populares" />
        <HorizontalList
          data={servicos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ServicoCard servico={item} />}
        />
      </ScrollView>
 
      <NotificacoesPainel
        visivel={painelAberto}
        notificacoes={notificacoes}
        onFechar={() => setPainelAberto(false)}
        onSelecionar={abrirNotificacao}
        onGerenciar={gerenciarNotificacoes}
      />
    </SafeAreaView>
  );
}