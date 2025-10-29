import { MonthData, Setor } from "@/types/types";


/**
 * Calcula o percentual de cada setor em relação a um valor base (receita ou despesa)
 */
export function calcularPercentualSetores(setores: Setor, base: number) {
  const total = base || 1;
  const percentual: { [key: string]: number } = {};
  Object.keys(setores).forEach((key) => {
    percentual[key] = (setores[key] / total) * 100;
    console.log(percentual[key])
  });
  return percentual;
}

/**
 * Soma os setores de todos os meses e retorna o percentual anual
 */
export function calcularSetoresAnual(months: MonthData[], base: "receita" | "despesa" = "receita") {
  const setoresAcumulados: Setor = {};

  // soma de cada setor no ano
  months.forEach((month) => {
    Object.keys(month.setores).forEach((setor) => {
      if (!setoresAcumulados[setor]) setoresAcumulados[setor] = 0;
      setoresAcumulados[setor] += month.setores[setor];
    });
  });

  // total base (ex: receita total do ano)
  const valorBase = months.reduce((acc, m) => acc + m[base], 0);

  // calcula percentual sobre o total base
  const setoresPercentual: { [key: string]: number } = {};
  Object.keys(setoresAcumulados).forEach((key) => {
    setoresPercentual[key] = (setoresAcumulados[key] / valorBase) * 100;
  });

  return setoresPercentual;
}
