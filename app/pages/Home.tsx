import React from "react";
import { ScrollView, View } from "react-native";
import csvData from "@/data/csvData";
import style from "@/styles/Home/home";
import KpiCard from "../../components/Home/KpiCard/KpiCard";
import LineChartLucro from "@/components/Home/LineChart";
import SecondGraph from "@/components/Home/SecondGraph";
import { calcularTrimestral, lucroMensal } from "@/utils/Home";
import { calcularSetoresAnual } from "@/utils/DepartmentSection";
import DepartamentSection from "@/components/Home/DepartmentSection";
import Insights from "@/components/Home/Insights";


export default function Home() {
  const kpi = csvData.kpi;
  const month = csvData.monthResults;
  const meses = Object.keys(month) as (keyof typeof month)[];

  const lucroPorMes = lucroMensal(month);

  const trimestres = ["T1", "T2", "T3", "T4"];
  const { receitaTrimestral, despesaTrimestral } = calcularTrimestral(month);

  const todosMeses = meses.map((m) => month[m]);
  // Percentual anual em relação à receita total
  const setoresPercentualAnual = calcularSetoresAnual(todosMeses, "receita");

  return (
    <ScrollView contentContainerStyle={[style.container, { paddingBottom: 60 }]}>
      {kpi.map((item, index) => (
        <KpiCard
          key={index}
          titulo={item.titulo}
          valor={item.valor}
          variacao={item.variacao}
          descricao={item.descricao}
        />
      ))}

      <LineChartLucro meses={meses.map((m) => m.toUpperCase())} lucroPorMes={lucroPorMes} />

      <SecondGraph
        trimestres={trimestres}
        receita={receitaTrimestral}
        despesa={despesaTrimestral}
      />

      <DepartamentSection setoresValores={setoresPercentualAnual} />
      
      <Insights/>
      <View style={{ height: 80 }} />
    </ScrollView>
  );
}
