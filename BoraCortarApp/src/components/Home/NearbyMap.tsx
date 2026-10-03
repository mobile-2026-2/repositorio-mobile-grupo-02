import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { REGIAO_INICIAL } from "@/constants/Home/map";
import { colors } from "@/constants/theme";
import { nearbyMapStyles as styles } from "@/styles/Home/nearbyMap.styles";
import { Barbearia } from "@/types";

type Props = {
  barbearias: Barbearia[];
};

export function NearbyMap({ barbearias }: Props) {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={REGIAO_INICIAL}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        {barbearias.map((b) => (
          <Marker
            key={b.id}
            coordinate={{ latitude: b.latitude, longitude: b.longitude }}
            tracksViewChanges={false}
          >
            <Ionicons name="location-sharp" size={34} color={colors.textPrimary} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}