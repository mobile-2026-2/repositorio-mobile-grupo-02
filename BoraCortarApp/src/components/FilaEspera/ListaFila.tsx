import React from "react";
import { Text, View } from "react-native";
import { listaFilaStyles as styles } from "@/styles/FilaEspera/listaFila.styles";
import { ItemFila } from "@/types/filaEspera";
import { FilaItem } from "./FilaItem";
 
type Props = {
  itens: ItemFila[];
};
 
export function ListaFila({ itens }: Props) {
  if (itens.length === 0) {
    return <Text style={styles.vazio}>Não há ninguém na fila no momento.</Text>;
  }
 
  return (
    <View style={styles.container}>
      {itens.map((item, indice) => (
        <FilaItem
          key={item.id}
          posicao={indice + 1}
          item={item}
          primeiro={indice === 0}
          ultimo={indice === itens.length - 1}
        />
      ))}
    </View>
  );
}