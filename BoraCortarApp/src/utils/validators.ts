export function apenasNumeros(valor: string): string {
  return valor.replace(/\D/g, "");
}

// ---------- MASCARAS (usadas enquanto o usuario digita) ----------

export function formatarCpf(valor: string): string {
  const n = apenasNumeros(valor).slice(0, 11);
  return n
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatarCelular(valor: string): string {
  const n = apenasNumeros(valor).slice(0, 11);
  if (n.length === 0) return "";
  if (n.length <= 2) return `(${n}`;
  if (n.length <= 6) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
  if (n.length <= 10) return `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`;
  return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`;
}

// ---------- VALIDACOES ----------

export function validarEmail(valor: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());
}

export function validarCelular(valor: string): boolean {
  const n = apenasNumeros(valor);
  if (n.length === 10) return true; // fixo: DDD + 8 digitos
  if (n.length === 11) return n[2] === "9"; // celular: DDD + 9 + 8 digitos
  return false;
}

export function validarCpf(valor: string): boolean {
  const cpf = apenasNumeros(valor);

  // 11 digitos e nao pode ser repetido (111.111.111-11 passa na conta, mas e invalido)
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const digito = (quantidade: number): number => {
    let soma = 0;
    for (let i = 0; i < quantidade; i++) {
      soma += Number(cpf[i]) * (quantidade + 1 - i);
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return digito(9) === Number(cpf[9]) && digito(10) === Number(cpf[10]);
}
