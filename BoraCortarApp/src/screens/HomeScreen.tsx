import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { HomeHeader } from "../components/home/HomeHeader";
import { SearchBar } from "@/components/home/SearchBar";
import { SectionHeader } from "@/components/home/SectionHeader";
import { NearbyMap } from "@/components/home/NearbyMap";
import { HorizontalList } from "@/components/home/HorizontalList";
import { BarbeariaCard } from "@/components/home/BarbeariaCard";
import { ServicoCard } from "@/components/home/ServicoCard";
import { useHomeData } from "@/hooks/home/useHomeDate";
import { homeScreenStyles as styles } from "@/styles/home/HomeScreen.styles";

export default function HomeScreen() {
  const router = useRouter();
  const { nomeUsuario, barbearias, servicos } = useHomeData();

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader nomeUsuario={nomeUsuario} />
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
          renderItem={({ item }) => <BarbeariaCard barbearia={item} />}
        />

        <SectionHeader titulo="Serviços populares" />
        <HorizontalList
          data={servicos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ServicoCard servico={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
}