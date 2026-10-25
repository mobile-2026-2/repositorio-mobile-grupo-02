import React, { useMemo } from "react";
import { Platform, StyleSheet, View } from "react-native";
import MapView, { Marker, type Region } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { NearbyMapWeb } from "@/components/Home/NearbyMapWeb";
import { mapaExplorarStyles as styles } from "@/styles/Explorar/mapaExplorar.styles";
import type { Barbearia } from "@/types";
import { formatarDistancia, formatarNota } from "@/utils/formatters";
 
type Props = {
  todas: Barbearia[]; // define o enquadramento do mapa (não muda ao buscar)
  barbearias: Barbearia[]; // as que aparecem como pinos
  onSelecionar: (barbearia: Barbearia) => void;
};
 
// Região que mostra todas as barbearias de uma vez (com uma folga nas bordas).
function calcularRegiao(lista: Barbearia[]): Region {
  if (lista.length === 0) {
    return { latitude: -14.2, longitude: -51.9, latitudeDelta: 30, longitudeDelta: 30 };
  }
 
  const latitudes = lista.map((b) => b.latitude);
  const longitudes = lista.map((b) => b.longitude);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);
 
  return {
    latitude: (minLat + maxLat) / 2,
    longitude: (minLng + maxLng) / 2,
    latitudeDelta: Math.max((maxLat - minLat) * 1.6, 0.02),
    longitudeDelta: Math.max((maxLng - minLng) * 1.6, 0.02),
  };
}
 
export function MapaExplorar({ todas, barbearias, onSelecionar }: Props) {
  const regiao = useMemo(() => calcularRegiao(todas), [todas]);
 
  // O mapa nativo não existe na web: mostra o aviso no lugar.
  if (Platform.OS === "web") {
    return <NearbyMapWeb barbearias={barbearias} />;
  }
 
  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill} initialRegion={regiao}>
        {barbearias.map((barbearia) => (
          <Marker
            key={barbearia.id}
            coordinate={{ latitude: barbearia.latitude, longitude: barbearia.longitude }}
            title={barbearia.nome}
            description={`★ ${formatarNota(barbearia.nota)}  •  ${formatarDistancia(barbearia.distanciaKm)}`}
            onCalloutPress={() => onSelecionar(barbearia)}
            tracksViewChanges={false}
          >
            <Ionicons name="location-sharp" size={36} color="#111111" />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}