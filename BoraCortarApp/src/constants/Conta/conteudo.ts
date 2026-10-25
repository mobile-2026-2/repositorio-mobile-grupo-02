import type { FormaPagamento, PerguntaFrequenteItem } from "@/types/conta";
 
export const FORMAS_PAGAMENTO: FormaPagamento[] = [
  {
    icone: "qr-code-outline",
    titulo: "Pix",
    descricao: "Pague na barbearia usando o QR code ou a chave Pix dela.",
  },
  {
    icone: "card-outline",
    titulo: "Cartão de crédito e débito",
    descricao: "Passe o cartão na maquininha da barbearia.",
  },
  {
    icone: "cash-outline",
    titulo: "Dinheiro",
    descricao: "Leve o valor do serviço e pague no local.",
  },
];
 
export const PERGUNTAS_FREQUENTES: PerguntaFrequenteItem[] = [
  {
    id: "agendar",
    pergunta: "Como agendo um serviço?",
    resposta:
      "Abra uma barbearia, escolha um ou mais serviços na aba Serviços e toque em Agendar. Depois escolha o profissional, a data e o horário e confirme.",
  },
  {
    id: "cancelar",
    pergunta: "Como cancelo um agendamento?",
    resposta:
      "Na aba Agendamentos, em Próximos, toque em Cancelar agendamento no card e confirme. Agendamentos cancelados ou já realizados ficam no Histórico.",
  },
  {
    id: "fila",
    pergunta: "Como funciona a fila de espera?",
    resposta:
      "Na aba Agendamentos, toque em Ver fila de espera. Você vê quem está na sua frente e o tempo estimado até a sua vez.",
  },
  {
    id: "dados",
    pergunta: "Posso alterar meus dados?",
    resposta:
      "Sim. Em Perfil > Dados pessoais você altera o nome e o celular. O e-mail e o CPF não podem ser alterados.",
  },
  {
    id: "pagamento",
    pergunta: "Como faço o pagamento?",
    resposta: "O pagamento é feito diretamente na barbearia, depois do atendimento.",
  },
];
 
// TROQUE pelos contatos reais do suporte.
export const CONTATO_SUPORTE = {
  email: "suporte@boracortar.com",
  whatsapp: "5511999999999", // código do país + DDD + número, só dígitos
};