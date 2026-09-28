export function formatarDistancia(km: number): string {
  return `${km.toFixed(1).replace(".", ",")} km`;
}

export function formatarNota(nota: number): string {
  return nota.toFixed(1);
}