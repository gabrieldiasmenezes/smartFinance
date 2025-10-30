// src/data/mockData.js
const csvData = {
  kpi: [
    {
      id: 1,
      titulo: "Receita Total",
      valor: "$1.02B",
      variacao: "+7.5%",
      descricao: "Aumento constante impulsionado por vendas online e novos contratos B2B",
    },
    {
      id: 2,
      titulo: "Despesas Operacionais",
      valor: "$765M",
      variacao: "+3.1%",
      descricao: "Custos estáveis com leve crescimento em logística e fornecedores externos",
    },
    {
      id: 3,
      titulo: "Margem de Lucro Líquido",
      valor: "25.0%",
      variacao: "+2.2%",
      descricao: "$255M de lucro líquido acumulado no ano",
    },
    {
      id: 4,
      titulo: "Otimização de Custos",
      valor: "$32M",
      variacao: "Economia identificada por IA",
      descricao: "Redução de desperdícios e renegociação de contratos internos",
    },
  ],

  quarterResults: {
    Q1: {
      trimestre: "1º Trimestre (Jan–Mar)",
      receita: 725000000, // soma dos 3 primeiros meses
      despesa: 543000000,
      lucro: 182000000,
      setores: {
        "Engenharia": 36000000,
        "Produtos": 42000000,
        "Marketing & Vendas": 31000000,
        "Suporte & CS": 16000000,
        "RH & Talentos": 11500000,
        "Financeiro": 12600000,
        "Operações Gerais": 20500000,
      },
    },
    Q2: {
      trimestre: "2º Trimestre (Abr–Jun)",
      receita: 760000000,
      despesa: 560000000,
      lucro: 200000000,
      setores: {
        "Engenharia": 37000000,
        "Produtos": 43000000,
        "Marketing & Vendas": 32000000,
        "Suporte & CS": 17000000,
        "RH & Talentos": 12000000,
        "Financeiro": 13100000,
        "Operações Gerais": 21000000,
      },
    },
    Q3: {
      trimestre: "3º Trimestre (Jul–Set)",
      receita: 810000000,
      despesa: 585000000,
      lucro: 225000000,
      setores: {
        "Engenharia": 39000000,
        "Produtos": 45000000,
        "Marketing & Vendas": 33500000,
        "Suporte & CS": 18500000,
        "RH & Talentos": 13500000,
        "Financeiro": 14000000,
        "Operações Gerais": 23000000,
      },
    },
    Q4: {
      trimestre: "4º Trimestre (Out–Dez)",
      receita: 855000000,
      despesa: 608000000,
      lucro: 247000000,
      setores: {
        "Engenharia": 40500000,
        "Produtos": 46500000,
        "Marketing & Vendas": 35500000,
        "Suporte & CS": 20500000,
        "RH & Talentos": 15500000,
        "Financeiro": 14800000,
        "Operações Gerais": 24500000,
      },
    },
  },
};

export default csvData;
