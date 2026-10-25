import type { Barbearia } from "@/types";
import type { OrdenacaoExplorar } from "@/types/explorar";
 
// Campos de texto onde a busca procura (os que existirem na barbearia).
const CAMPOS_BUSCA = ["nome", "endereco", "bairro", "cidade"];
 
/** Minúsculas e sem acento: "Barbéaria" e "barbearia" passam a ser iguais. */
export function normalizarTexto(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}
 
function textoBuscavel(barbearia: Barbearia): string {
  const registro = barbearia as unknown as Record<string, unknown>;
  return CAMPOS_BUSCA.map((campo) => registro[campo])
    .filter((valor): valor is string => typeof valor === "string")
    .join(" ");
}
 
/** Todas as palavras digitadas precisam aparecer em algum lugar do texto da barbearia. */
export function filtrarBarbearias(lista: Barbearia[], termo: string): Barbearia[] {
  const busca = normalizarTexto(termo);
  if (busca === "") return lista;
 
  const palavras = busca.split(/\s+/);
  return lista.filter((barbearia) => {
    const texto = normalizarTexto(textoBuscavel(barbearia));
    return palavras.every((palavra) => texto.includes(palavra));
  });
}
 
export function ordenarBarbearias(lista: Barbearia[], ordem: OrdenacaoExplorar): Barbearia[] {
  const copia = [...lista];
  return ordem === "avaliacao"
    ? copia.sort((a, b) => b.nota - a.nota)
    : copia.sort((a, b) => a.distanciaKm - b.distanciaKm);
}