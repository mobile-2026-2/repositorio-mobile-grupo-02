import React from "react";
import {FlatList,Pressable,ScrollView,StyleSheet,Text,TextInput,View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useRouter } from "expo-router";

type Barbearia = {
  id: string;
  nome: string;
  nota: number;
  distanciaKm: number;
  fechaAs: string;
  latitude: number;
  longitude: number;
};

type Servico = {
  id: string;
  nome: string;
  icone: keyof typeof Ionicons.glyphMap;
};

const BARBEARIAS: Barbearia[] = [
  { id: "1", nome: "Old School Barber", nota: 4.8, distanciaKm: 1.2, fechaAs: "20:00", latitude: -22.7645, longitude: -43.3995 },
  { id: "2", nome: "Kings Barbershop", nota: 4.9, distanciaKm: 2.1, fechaAs: "21:00", latitude: -22.7601, longitude: -43.3948 },
  { id: "3", nome: "Barba & Estilo", nota: 4.6, distanciaKm: 2.8, fechaAs: "19:00", latitude: -22.7688, longitude: -43.3902 },
];

const SERVICOS: Servico[] = [
  { id: "1", nome: "Corte", icone: "cut-outline" },
  { id: "2", nome: "Barba", icone: "man-outline" },
  { id: "3", nome: "Corte + Barba", icone: "sparkles-outline" },
  { id: "4", nome: "Sobrancelha", icone: "eye-outline" },
];

const REGIAO_INICIAL = {
  latitude: -22.7645,
  longitude: -43.3948,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
};

export default function HomeScreen() {
  const router = useRouter();
  const nomeUsuario = "Matheus"; // depois virá do usuário autenticado

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.headerTexto}>
            <Text style={styles.saudacao}>Olá, {nomeUsuario}</Text>
            <Text style={styles.subtitulo}>
              Encontre a melhor barbearia perto de você.
            </Text>
          </View>
          <Pressable style={styles.sino} hitSlop={8}>
            <Ionicons name="notifications-outline" size={26} color="#111" />
            <View style={styles.sinoBadge} />
          </Pressable>
        </View>

        {/* Busca */}
        <View style={styles.busca}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.buscaInput}
            placeholder="Buscar barbearias, serviços..."
            placeholderTextColor="#888"
            returnKeyType="search"
          />
        </View>

        {/* Próximas de você */}
        <View style={styles.secaoTitulo}>
          <Text style={styles.titulo}>Próximas de você</Text>
          <Pressable onPress={() => router.push("/explorar")}>
            <Text style={styles.verTodas}>Ver todas</Text>
          </Pressable>
        </View>

        <View style={styles.mapaContainer}>
          <MapView
            style={StyleSheet.absoluteFill}
            initialRegion={REGIAO_INICIAL}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
            pitchEnabled={false}
          >
            {BARBEARIAS.map((b) => (
              <Marker
                key={b.id}
                coordinate={{ latitude: b.latitude, longitude: b.longitude }}
                tracksViewChanges={false}
              >
                <Ionicons name="location-sharp" size={34} color="#111" />
              </Marker>
            ))}
          </MapView>
        </View>

        {/* Barbearias em destaque */}
        <Text style={[styles.titulo, styles.tituloSolto]}>
          Barbearias em destaque
        </Text>

        <FlatList
          data={BARBEARIAS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carrossel}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={({ item }) => (
            <Pressable style={styles.card}>
              <View style={styles.cardFoto}>
                <Ionicons name="storefront-outline" size={36} color="#bbb" />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardNome} numberOfLines={1}>
                  {item.nome}
                </Text>
                <View style={styles.cardLinha}>
                  <Ionicons name="star" size={14} color="#F5A623" />
                  <Text style={styles.cardNota}>{item.nota.toFixed(1)}</Text>
                  <Text style={styles.cardDistancia}>
                    {"  •  "}
                    {item.distanciaKm.toFixed(1).replace(".", ",")} km
                  </Text>
                </View>
                <Text style={styles.cardHorario}>Aberto até {item.fechaAs}</Text>
              </View>
            </Pressable>
          )}
        />

        {/* Serviços populares */}
        <Text style={[styles.titulo, styles.tituloSolto]}>
          Serviços populares
        </Text>

        <FlatList
          data={SERVICOS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carrossel}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={({ item }) => (
            <Pressable style={styles.servico}>
              <Ionicons name={item.icone} size={24} color="#111" />
              <Text style={styles.servicoNome}>{item.nome}</Text>
            </Pressable>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  content: { paddingBottom: 32 },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  headerTexto: { flex: 1, paddingRight: 12 },
  saudacao: { fontSize: 26, fontWeight: "700", color: "#111" },
  subtitulo: { fontSize: 16, color: "#333", marginTop: 6, lineHeight: 22 },
  sino: { padding: 4 },
  sinoBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#E53935",
  },

  busca: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 14,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 14,
    height: 48,
  },
  buscaInput: { flex: 1, marginLeft: 10, fontSize: 15, color: "#111" },

  secaoTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 28,
  },
  titulo: { fontSize: 18, fontWeight: "700", color: "#111" },
  tituloSolto: { paddingHorizontal: 20, marginTop: 28 },
  verTodas: { fontSize: 14, fontWeight: "600", color: "#111" },

  mapaContainer: {
    height: 180,
    marginHorizontal: 20,
    marginTop: 14,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#E8E8E8",
  },

  carrossel: { paddingHorizontal: 20, paddingTop: 14 },

  card: {
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEE",
    overflow: "hidden",
  },
  cardFoto: {
    height: 110,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo: { padding: 12 },
  cardNome: { fontSize: 15, fontWeight: "700", color: "#111" },
  cardLinha: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  cardNota: { fontSize: 13, fontWeight: "600", color: "#111", marginLeft: 4 },
  cardDistancia: { fontSize: 13, color: "#666" },
  cardHorario: { fontSize: 12, color: "#666", marginTop: 8 },

  servico: {
    width: 110,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: "#F3F3F3",
    alignItems: "center",
    gap: 8,
  },
  servicoNome: { fontSize: 13, fontWeight: "600", color: "#111" },
});