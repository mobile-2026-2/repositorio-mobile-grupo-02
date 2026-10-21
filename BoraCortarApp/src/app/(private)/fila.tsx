import { useLocalSearchParams } from "expo-router";
import FilaEsperaScreen from "@/screens/FilaEsperaScreen";
 
export default function FilaRoute() {
  const { agendamentoId } = useLocalSearchParams<{ agendamentoId: string }>();
 
  return <FilaEsperaScreen agendamentoId={agendamentoId} />;
}