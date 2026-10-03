import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { horizontalListStyles as styles } from "@/styles/Home/horizontalList.styles";

type Props<T> = {
  data: T[];
  keyExtractor: (item: T) => string;
  renderItem: ListRenderItem<T>;
};

export function HorizontalList<T>({ data, keyExtractor, renderItem }: Props<T>) {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}