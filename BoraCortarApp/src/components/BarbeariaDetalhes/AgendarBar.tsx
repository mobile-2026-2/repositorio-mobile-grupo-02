import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { agendarBarStyles as styles } from "@/styles/BarbeariaDetalhes/agendarBar.styles";
import { formatarPreco } from "@/utils/detalhesFormatters";
 
type Props = {
  quantidade: number;
  total: number;
  onPress: () => void;
};
 
export function AgendarBar({ quantidade, total, onPress }: Props) {
  const insets = useSafeAreaInsets();
  const semSelecao = quantidade === 0;
 
  const rotulo = semSelecao
    ? "Agendar serviço"
    : `Agendar • ${quantidade} ${quantidade === 1 ? "serviço" : "serviços"} • ${formatarPreco(total)}`;
 
  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <Pressable
        style={[styles.botao, semSelecao && styles.botaoDesabilitado]}
        onPress={onPress}
        disabled={semSelecao}
        accessibilityRole="button"
        accessibilityState={{ disabled: semSelecao }}
      >
        <Text style={styles.texto}>{rotulo}</Text>
      </Pressable>
    </View>
  );
}