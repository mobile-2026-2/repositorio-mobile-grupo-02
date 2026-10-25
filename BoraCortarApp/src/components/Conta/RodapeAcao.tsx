import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { agendarBarStyles as styles } from "@/styles/BarbeariaDetalhes/agendarBar.styles";
 
type Props = {
  rotulo: string;
  habilitado?: boolean;
  carregando?: boolean;
  onPress: () => void;
};
 
export function RodapeAcao({ rotulo, habilitado = true, carregando = false, onPress }: Props) {
  const insets = useSafeAreaInsets();
  const desabilitado = !habilitado || carregando;
 
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <Pressable
        style={[styles.botao, desabilitado && styles.botaoDesabilitado]}
        onPress={onPress}
        disabled={desabilitado}
        accessibilityRole="button"
        accessibilityState={{ disabled: desabilitado }}
      >
        <Text style={styles.texto}>{rotulo}</Text>
      </Pressable>
    </View>
  );
}