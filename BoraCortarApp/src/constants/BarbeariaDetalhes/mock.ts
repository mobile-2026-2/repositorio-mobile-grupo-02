import { Avaliacao, DetalhesBarbearia, ServicoBarbearia } from "@/types/barbeariaDetalhes";

/*
  DADOS DE EXEMPLO (fictícios). As chaves ("1", "2", "3") são os mesmos ids de BARBEARIAS_MOCK.
  Para colocar imagens, descomente as linhas capa/logo e salve os arquivos em assets/images/barbearias/.
*/

export const DETALHES_MOCK: Record<string, DetalhesBarbearia> = {
  "1": {
    telefone: "(21) 99999-0001",
    endereco: "Rua das Palmeiras, 120 - Centro",
    sobre:
      "Barbearia tradicional, com atendimento clássico e ambiente descontraído. Cortes, barba e muito estilo.",
    totalAvaliacoes: 128,
    horarios: [
      { dia: "Segunda a sexta", horario: "09:00 - 20:00" },
      { dia: "Sábado", horario: "09:00 - 18:00" },
      { dia: "Domingo", horario: "Fechado" },
    ],
    capa: require("../../../assets/images/barbearias/capa-old-school.jpg"),
    logo: require("../../../assets/images/barbearias/old-school-barber.jpg"),
    // capa: require("../../../assets/images/barbearias/old-school-capa.jpg"),
    // logo: require("../../../assets/images/barbearias/old-school-logo.png"),
  },
  "2": {
    telefone: "(21) 99999-0002",
    endereco: "Av. Brasil, 450 - Centro",
    sobre: "Ambiente premium, barbeiros experientes e atendimento com hora marcada.",
    totalAvaliacoes: 94,
    horarios: [
      { dia: "Segunda a sexta", horario: "10:00 - 21:00" },
      { dia: "Sábado", horario: "10:00 - 19:00" },
      { dia: "Domingo", horario: "Fechado" },
    ],
    capa: require("../../../assets/images/barbearias/kings-barbershop.webp"),
    logo: require("../../../assets/images/barbearias/kings-barbershop-logo.jpg")
  },
  "3": {
    telefone: "(21) 99999-0003",
    endereco: "Rua do Comércio, 77 - Centro",
    sobre: "Especialistas em barba e acabamento. Atendimento rápido e preço justo.",
    totalAvaliacoes: 61,
    horarios: [
      { dia: "Segunda a sábado", horario: "09:00 - 19:00" },
      { dia: "Domingo", horario: "Fechado" },
    ],
    capa: require("../../../assets/images/barbearias/barbeirosSA.jpg"),
    logo: require("../../../assets/images/barbearias/barbeirosSA-logo.jpg")
  },
};

export const SERVICOS_BARBEARIA_MOCK: Record<string, ServicoBarbearia[]> = {
  "1": [
    { id: "corte", nome: "Corte de Cabelo", preco: 40, duracaoMin: 30 },
    { id: "barba", nome: "Barba", preco: 30, duracaoMin: 20 },
    { id: "corte-barba", nome: "Corte + Barba", preco: 60, duracaoMin: 50 },
    { id: "sobrancelha", nome: "Sobrancelha", preco: 15, duracaoMin: 10 },
  ],
  "2": [
    { id: "corte", nome: "Corte de Cabelo", preco: 45, duracaoMin: 30 },
    { id: "barba", nome: "Barba", preco: 35, duracaoMin: 25 },
    { id: "corte-barba", nome: "Corte + Barba", preco: 70, duracaoMin: 55 },
  ],
  "3": [
    { id: "corte", nome: "Corte de Cabelo", preco: 35, duracaoMin: 30 },
    { id: "barba", nome: "Barba", preco: 28, duracaoMin: 20 },
    { id: "corte-barba", nome: "Corte + Barba", preco: 55, duracaoMin: 45 },
  ],
};

export const AVALIACOES_MOCK: Record<string, Avaliacao[]> = {
  "1": [
    { id: "a1", autor: "Carlos M.", nota: 5, comentario: "Corte impecável e atendimento nota 10.", data: "há 2 dias" },
    { id: "a2", autor: "Rafael S.", nota: 5, comentario: "Ambiente muito bom, voltarei com certeza.", data: "há 1 semana" },
    { id: "a3", autor: "Bruno T.", nota: 4, comentario: "Ótimo serviço, só um pouco de espera.", data: "há 3 semanas" },
  ],
  "2": [
    { id: "b1", autor: "Diego A.", nota: 5, comentario: "Melhor barba que já fiz.", data: "há 4 dias" },
    { id: "b2", autor: "Lucas P.", nota: 5, comentario: "Pontualidade e capricho.", data: "há 2 semanas" },
  ],
  "3": [
    { id: "c1", autor: "Marcos V.", nota: 4, comentario: "Bom custo-benefício.", data: "há 5 dias" },
  ],
};
