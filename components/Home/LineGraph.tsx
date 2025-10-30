import React from "react";
import { Dimensions} from "react-native";
import { LineChart } from "react-native-chart-kit";
import csvData from "@/data/csvData";
import color from "../color";
import style from "@/styles/Home/lineChart";

export default function LineGraph() {
  const screenWidth = Dimensions.get("window").width -64;

  const labels = ["T1", "T2", "T3", "T4"];

  const receitaData = [
    csvData.quarterResults.Q1.receita / 1_000_000,
    csvData.quarterResults.Q2.receita / 1_000_000,
    csvData.quarterResults.Q3.receita / 1_000_000,
    csvData.quarterResults.Q4.receita / 1_000_000,
  ];

  const lucroData = [
    csvData.quarterResults.Q1.lucro / 1_000_000,
    csvData.quarterResults.Q2.lucro / 1_000_000,
    csvData.quarterResults.Q3.lucro / 1_000_000,
    csvData.quarterResults.Q4.lucro / 1_000_000,
  ];

  return (
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: receitaData,
              color: () => `rgba(34,197,94,0.8)`, // verde suave
              strokeWidth: 3,
            },
            {
              data: lucroData,
              color: () => `rgba(239,68,68,0.8)`, // vermelho suave
              strokeWidth: 3,
            },
          ],
          legend: ["Receita", "Lucro"],
        }}
        width={screenWidth}
        height={280}
        yAxisSuffix="M"
        yAxisInterval={1}
        fromZero
        withShadow
        withInnerLines
        withOuterLines={false}
        bezier
        onDataPointClick={(data) => {
          console.log(`Valor: ${data.value}M, Índice: ${data.index}`);
        }}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#f8fafc",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(50,50,50,${opacity})`,
          labelColor: (opacity = 0.7) => `rgba(80,80,80,${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff",
          },
          propsForBackgroundLines: {
            strokeWidth: 0.5,
            strokeDasharray: "3",
            stroke: color.border,
          },
        }}
        style={style.chart}
      />

  );
}


