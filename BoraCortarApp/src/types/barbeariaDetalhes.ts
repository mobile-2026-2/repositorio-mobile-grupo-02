// Imagem local: require("...")  |  imagem da internet: { uri: "https://..." }
export type FonteImagem = number | { uri: string };

export type ServicoBarbearia = {
  id: string;
  nome: string;
  preco: number; // em reais
  duracaoMin: number;
};

export type Avaliacao = {
  id: string;
  autor: string;
  nota: number; // 0 a 5
  comentario: string;
  data: string; // texto pronto, ex.: "há 2 dias"
};

export type HorarioFuncionamento = {
  dia: string;
  horario: string;
};

export type DetalhesBarbearia = {
  telefone: string;
  endereco: string;
  sobre: string;
  totalAvaliacoes: number;
  horarios: HorarioFuncionamento[];
  capa?: FonteImagem; // foto grande do topo
  logo?: FonteImagem; // logo redonda
};

export type AbaDetalhes = "servicos" | "informacoes" | "avaliacoes";
