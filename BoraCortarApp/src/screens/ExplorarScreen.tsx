import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { BarbeariaCard } from "@/components/Home/BarbeariaCard";
import { HorizontalList } from "@/components/Home/HorizontalList";
import { SectionHeader } from "@/components/Home/SectionHeader";
import { BotaoFiltrar } from "@/components/Explorar/BotaoFiltrar";
import { BuscaExplorar } from "@/components/Explorar/BuscaExplorar";
import { FiltrosModal } from "@/components/Explorar/FiltrosModal";
import { MapaExplorar } from "@/components/Explorar/MapaExplorar";
import { useExplorar } from "@/hooks/Explorar/useExplorar";
import { explorarScreenStyles as styles } from "@/styles/Explorar/explorarScreen.styles";
import type { Barbearia } from "@/types";
 
export default function ExplorarScreen() {
  const router = useRouter();
  const explorar = useExplorar();
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
 
  const total = explorar.resultados.length;
  const tituloResultados = explorar.buscando
    ? `${total} ${total === 1 ? "barbearia encontrada" : "barbearias encontradas"}`
    : "Barbearias";
 
  const abrirBarbearia = (barbearia: Barbearia) => {
    router.push(`/(private)/barbearia/${barbearia.id}`);
  };
 
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titulo}>Explorar</Text>
 
        <BuscaExplorar valor={explorar.busca} onChange={explorar.setBusca} />
 
        <View style={styles.mapaArea}>
          <MapaExplorar
            todas={explorar.todas}
            barbearias={explorar.resultados}
            onSelecionar={abrirBarbearia}
          />
          <View style={styles.filtrarPosicao}>
            <BotaoFiltrar onPress={() => setFiltrosAbertos(true)} />
          </View>
        </View>
 
        <SectionHeader titulo={tituloResultados} />
 
        {total > 0 ? (
          <HorizontalList
            data={explorar.resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BarbeariaCard barbearia={item} onPress={abrirBarbearia} />}
          />
        ) : (
          <Text style={styles.vazio}>
            Nenhuma barbearia encontrada para “{explorar.busca.trim()}”.
          </Text>
        )}
      </ScrollView>
 
      <FiltrosModal
        visivel={filtrosAbertos}
        ordenacao={explorar.ordenacao}
        onSelecionar={explorar.setOrdenacao}
        onFechar={() => setFiltrosAbertos(false)}
      />
    </SafeAreaView>
  );
}