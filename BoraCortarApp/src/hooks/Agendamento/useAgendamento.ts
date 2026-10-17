import { useMemo, useState } from "react";
import { DIAS_VISIVEIS, HORARIOS, profissionaisDaBarbearia } from "@/constants/Agendamento/mock";
import { HorarioAgendamento } from "@/types/agendamento";
import { gerarDias, horarioJaPassou, montarDataHora } from "@/utils/agendamentoFormatters";
 
/** Estado das escolhas da tela: profissional, dia e horário. */
export function useAgendamento(barbeariaId?: string) {
  const profissionais = useMemo(() => profissionaisDaBarbearia(barbeariaId), [barbeariaId]);
  const dias = useMemo(() => gerarDias(DIAS_VISIVEIS), []);
 
  const [profissionalId, setProfissionalId] = useState(profissionais[0].id);
  const [chaveDia, setChaveDia] = useState(dias[0].chave);
  const [hora, setHora] = useState<string | null>(null);
 
  const dia = dias.find((d) => d.chave === chaveDia) ?? dias[0];
  const profissional = profissionais.find((p) => p.id === profissionalId) ?? profissionais[0];
 
  const horarios: HorarioAgendamento[] = useMemo(
    () => HORARIOS.map((h) => ({ hora: h, disponivel: !horarioJaPassou(dia.data, h) })),
    [dia]
  );
 
  // Trocar de dia limpa o horário, porque a disponibilidade muda.
  const escolherDia = (chave: string) => {
    setChaveDia(chave);
    setHora(null);
  };
 
  const dataHora = hora ? montarDataHora(dia.data, hora) : null;
 
  return {
    dias,
    profissionais,
    horarios,
    profissional,
    chaveDia,
    hora,
    dataHora,
    escolherProfissional: setProfissionalId,
    escolherDia,
    escolherHora: setHora,
  };
}