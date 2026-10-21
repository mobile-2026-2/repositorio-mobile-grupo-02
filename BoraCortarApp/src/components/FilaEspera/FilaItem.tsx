import React from "react";
import { Text, View } from "react-native";
import { filaItemStyles as styles } from "@/styles/FilaEspera/filaItem.styles";
import { ItemFila } from "@/types/filaEspera";
 
type Props = {
  posicao: number;
  item: ItemFila;
  primeiro: boolean;
  ultimo: boolean;
};
 
export function FilaItem({ posicao, item, primeiro, ultimo }: Props) {
  return (
    <View
      style={[
        styles.container,
        primeiro && styles.primeiro,
        ultimo && styles.ultimo,
        item.ehVoce && styles.voce,
      ]}
    >
      <View style={[styles.posicao, item.ehVoce && styles.posicaoVoce]}>
        <Text style={[styles.numero, item.ehVoce && styles.numeroVoce]}>{posicao}</Text>
      </View>
 
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={1}>
          {item.nome}
        </Text>
        <Text style={[styles.servico, item.ehVoce && styles.servicoVoce]} numberOfLines={1}>
          {item.servico}
        </Text>
      </View>
    </View>
  );
}