import csvData from "@/data/csvData";

type DepartamentoKeys = keyof typeof trimestres.Q1.setores;

// Pega os trimestres
const trimestres = csvData.quarterResults;

// Pega dinamicamente os nomes dos departamentos do Q1
const departamentos = Object.keys(trimestres.Q1.setores) as DepartamentoKeys[];

// Função que calcula o orçamento anual de um departamento
export function calculaOrcamento(name: DepartamentoKeys): number {
  return (
    trimestres.Q1.setores[name] +
    trimestres.Q2.setores[name] +
    trimestres.Q3.setores[name] +
    trimestres.Q4.setores[name]
  );
}

// Cria a lista de departamentos com id, nome e orçamento anual
export const departaments = departamentos.map((name, index) => ({
  id: index + 1,
  name,
  orcamentoAnual: calculaOrcamento(name),
}));

// Soma total do orçamento anual de todos os departamentos
export const totalDepartamentos = departaments.reduce(
  (total, dep) => total + dep.orcamentoAnual,
  0
);
