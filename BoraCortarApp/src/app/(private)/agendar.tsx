import { useLocalSearchParams } from "expo-router";
import AgendarServicoScreen from "@/screens/AgendarServicoScreen";
 
export default function AgendarRoute() {
  const { barbeariaId, servicos } = useLocalSearchParams<{ barbeariaId: string; servicos: string }>();
 
  return (
    <AgendarServicoScreen
      barbeariaId={barbeariaId}
      servicosIds={servicos ? servicos.split(",") : []}
    />
  );
}