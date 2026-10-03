import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { HomeHeader } from "../components/Home/HomeHeader";
import { SearchBar } from "@/components/Home/SearchBar";
import { SectionHeader } from "@/components/Home/SectionHeader";
import { NearbyMap } from "@/components/Home/NearbyMap";
import { HorizontalList } from "@/components/Home/HorizontalList";
import { BarbeariaCard } from "@/components/Home/BarbeariaCard";
import { ServicoCard } from "@/components/Home/ServicoCard";
import { useHomeData } from "@/hooks/Home/useHomeDate";
import { homeScreenStyles as styles } from "@/styles/Home/HomeScreen.styles";

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