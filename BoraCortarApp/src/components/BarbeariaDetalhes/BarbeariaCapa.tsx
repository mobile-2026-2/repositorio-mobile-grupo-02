import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { barbeariaCapaStyles as styles } from "@/styles/BarbeariaDetalhes/barbeariaCapa.styles";
import { FonteImagem } from "@/types/barbeariaDetalhes";
 
type Props = {
  capa?: FonteImagem;
  logo?: FonteImagem;
};
 
export function BarbeariaCapa({ capa, logo }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.capa}>
        {capa ? (
          <Image source={capa} style={StyleSheet.absoluteFill} contentFit="cover" transition={200} />
        ) : (
          <Ionicons name="storefront-outline" size={48} color={colors.iconMuted} />
        )}
      </View>
 
      <View style={styles.logo}>
        {logo ? (
          <Image source={logo} style={StyleSheet.absoluteFill} contentFit="cover" />
        ) : (
          <Ionicons name="cut-outline" size={34} color="#FFFFFF" />
        )}
      </View>
    </View>
  );
}