import { Ionicons } from "@expo/vector-icons";

export type Barbearia = {
  id: string;
  nome: string;
  nota: number;
  distanciaKm: number;
  fechaAs: string;
  latitude: number;
  longitude: number;
  foto?: number; // imagem do projeto: require("...")
  fotoUrl?: string; // imagem da internet / Firebase
};

export type Servico = {
  id: string;
  nome: string;
  icone: keyof typeof Ionicons.glyphMap;
};