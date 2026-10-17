import { Profissional } from "@/types/agendamento";
 
// Para usar foto: foto: require("../../../assets/images/profissionais/joao.jpg")
// ou foto: { uri: "https://..." }
 
// Profissionais de cada barbearia. A CHAVE é o id da barbearia
// (o mesmo id usado em constants/Home/mockData.ts).
export const PROFISSIONAIS_POR_BARBEARIA: Record<string, Profissional[]> = {
  "1": [
    { id: "joao", nome: "João" },
    { id: "carlos", nome: "Carlos" },
    { id: "rafael", nome: "Rafael" },
  ],
  "2": [
    { id: "marcos", nome: "Marcos" },
    { id: "bruno", nome: "Bruno" },
    { id: "diego", nome: "Diego" },
    { id: "felipe", nome: "Felipe" },
  ],
  "3": [
    { id: "andre", nome: "André" },
    { id: "thiago", nome: "Thiago" },
  ],
};
 
// Usada quando a barbearia não tem lista própria acima.
export const PROFISSIONAIS_PADRAO: Profissional[] = [
  { id: "joao", nome: "João" },
  { id: "carlos", nome: "Carlos" },
  { id: "rafael", nome: "Rafael" },
  { id: "lucas", nome: "Lucas" },
];
 
export function profissionaisDaBarbearia(barbeariaId?: string): Profissional[] {
  const lista = barbeariaId ? PROFISSIONAIS_POR_BARBEARIA[barbeariaId] : undefined;
  return lista && lista.length > 0 ? lista : PROFISSIONAIS_PADRAO;
}
 
export const HORARIOS = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
 
export const DIAS_VISIVEIS = 7;