export type IconThemeProps = {
  titulo: string;
  variacao?: string;
};

export interface Trimestre {
  receita: number;
  despesa: number;
}

export interface Setor {
  [key: string]: number;
}

export interface MonthData {
  setores: Setor;
  receita: number;
  despesa: number;
  lucro: number;
}