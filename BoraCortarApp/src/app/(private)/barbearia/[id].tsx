import { useLocalSearchParams } from "expo-router";
import BarbeariaDetalhesScreen from "@/screens/BarbeariaDetalhesScreen";
 
export default function BarbeariaRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <BarbeariaDetalhesScreen id={id} />;
}