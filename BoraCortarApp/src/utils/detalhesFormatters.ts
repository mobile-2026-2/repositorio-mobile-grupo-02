export function formatarPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

export function formatarDuracao(minutos: number): string {
  if (minutos < 60) return `${minutos} min`;
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  return resto === 0 ? `${horas}h` : `${horas}h ${resto}min`;
}

export function formatarTotalAvaliacoes(total: number): string {
  return `(${total} ${total === 1 ? "avaliação" : "avaliações"})`;
}

export function apenasDigitos(valor: string): string {
  return valor.replace(/\D/g, "");
}
