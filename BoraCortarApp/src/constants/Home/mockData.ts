import { Barbearia, Servico } from "../../types";

export const BARBEARIAS_MOCK: Barbearia[] = [
  {
    id: "1",
    nome: "Old School Barber",
    nota: 4.8,
    distanciaKm: 1.2,
    fechaAs: "20:00",
    latitude: -22.7645,
    longitude: -43.3995,
    foto: require("../../../assets/images/old-school-barber.jpg"),
  },
  {
    id: "2",
    nome: "Kings Barbershop",
    nota: 4.9,
    distanciaKm: 2.1,
    fechaAs: "21:00",
    latitude: -22.7601,
    longitude: -43.3948,
    foto: require("../../../assets/images/kings-barbershop.webp"), // imagem da internet
  },
  {
    id: "3",
    nome: "Barbeiros SA",
    nota: 4.6,
    distanciaKm: 2.8,
    fechaAs: "19:00",
    latitude: -22.7688,
    longitude: -43.3902,
    foto: require("../../../assets/images/barbeirosSA.jpg"),
  },
];

export const SERVICOS_MOCK: Servico[] = [
  { id: "1", nome: "Corte", icone: "cut-outline" },
  { id: "2", nome: "Barba", icone: "man-outline" },
  { id: "3", nome: "Corte + Barba", icone: "sparkles-outline" },
  { id: "4", nome: "Sobrancelha", icone: "eye-outline" },
];