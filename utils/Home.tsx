import { Trimestre } from "@/types/types";


// Função que soma receita e despesa de um trimestre
export function somaTrimestre(months: { receita: number; despesa: number }[]): Trimestre {
  const receita = months.reduce((acc, m) => acc + m.receita, 0);
  const despesa = months.reduce((acc, m) => acc + m.despesa, 0);
  return { receita, despesa };
}

// Função que gera arrays de receita e despesa trimestral a partir do monthResults
export function calcularTrimestral(month: any) {
  const trimestresMeses: (keyof typeof month)[][] = [
    ["jan", "fev", "mar"],
    ["abr", "mai", "jun"],
    ["jul", "ago", "set"],
    ["out", "nov", "dez"],
  ];

  const receitaTrimestral = trimestresMeses.map(
    (mesesTrim) => somaTrimestre(mesesTrim.map((m) => month[m])).receita / 1_000_000
  );

  const despesaTrimestral = trimestresMeses.map(
    (mesesTrim) => somaTrimestre(mesesTrim.map((m) => month[m])).despesa / 1_000_000
  );

  return { receitaTrimestral, despesaTrimestral };
}

// Função que retorna lucro mensal em milhões
export function lucroMensal(month: any) {
  const meses = Object.keys(month) as (keyof typeof month)[];
  return meses.map((mes) => month[mes].lucro / 1_000_000);
}
