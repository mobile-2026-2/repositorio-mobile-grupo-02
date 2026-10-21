import { collection, getDocs, query, Timestamp, where } from "firebase/firestore";
import type { FilaEspera } from "@/types/filaEspera";
import { db } from "./firebase";
import type { AgendamentoDoc, EntradaFilaDoc } from "./database.types";
 
type PessoaNaFila = {
  id: string;
  nome: string;
  servico: string;
  duracaoMin: number;
  hora: number; // horario do agendamento em milissegundos
  ehVoce: boolean;
};
 
/**
 * Fila de espera da barbearia no dia do agendamento, lida do Firestore
 * (filas/{barbeariaId}/entradas). Mostra quem ainda nao terminou o atendimento,
 * em ordem de horario, com o cliente ("Voce") na sua posicao.
 */
export async function buscarFila(agendamento: AgendamentoDoc): Promise<FilaEspera> {
  const dia = agendamento.data.toDate();
  const inicioDoDia = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate());
  const fimDoDia = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate() + 1);
 
  // Filtro so por "data" (um unico campo): nao exige indice composto.
  const snap = await getDocs(
    query(
      collection(db, "filas", agendamento.barbeariaId, "entradas"),
      where("data", ">=", Timestamp.fromDate(inicioDoDia)),
      where("data", "<", Timestamp.fromDate(fimDoDia))
    )
  );
 
  const agora = Date.now();
 
  const outras: PessoaNaFila[] = snap.docs
    .filter((d) => d.id !== agendamento.id)
    .map((d) => ({ id: d.id, entrada: d.data() as EntradaFilaDoc }))
    .filter(
      ({ entrada }) =>
        (entrada.status === "pendente" || entrada.status === "confirmado") &&
        entrada.data.toMillis() + entrada.duracaoMin * 60 * 1000 > agora
    )
    .map(({ id, entrada }) => ({
      id,
      nome: entrada.primeiroNome,
      servico: entrada.servicoNome,
      duracaoMin: entrada.duracaoMin,
      hora: entrada.data.toMillis(),
      ehVoce: false,
    }));
 
  // O proprio cliente entra sempre, mesmo que o agendamento seja antigo e nao tenha entrada.
  const voce: PessoaNaFila = {
    id: agendamento.id,
    nome: "Você",
    servico: agendamento.servicoNome,
    duracaoMin: agendamento.duracaoMin,
    hora: agendamento.data.toMillis(),
    ehVoce: true,
  };
 
  const ordenada = [...outras, voce].sort((a, b) => a.hora - b.hora || a.id.localeCompare(b.id));
 
  // Espera estimada = soma da duracao de quem esta na frente.
  const indiceVoce = ordenada.findIndex((p) => p.ehVoce);
  const tempoEsperaMin = ordenada
    .slice(0, indiceVoce)
    .reduce((total, p) => total + p.duracaoMin, 0);
 
  return {
    tempoEsperaMin,
    itens: ordenada.map(({ id, nome, servico, ehVoce }) => ({ id, nome, servico, ehVoce })),
  };
}