import React from "react";
import { Platform } from "react-native";
import { Barbearia } from "@/types";
import { NearbyMap as NearbyMapNativo } from "./NearbyMap";
import { NearbyMapWeb } from "./NearbyMapWeb";

type Props = {
  barbearias: Barbearia[];
};

// Escolhe o mapa certo para cada plataforma:
// - celular (iOS/Android): o mapa de verdade (NearbyMap.tsx, sem nenhuma alteração)
// - web: um aviso no lugar, porque o react-native-maps não funciona no navegador
export function NearbyMap({ barbearias }: Props) {
  if (Platform.OS === "web") {
    return <NearbyMapWeb barbearias={barbearias} />;
  }

  return <NearbyMapNativo barbearias={barbearias} />;
}
