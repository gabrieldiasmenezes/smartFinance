import csvData from "@/data/csvData";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import color from "../color";
import style from "@/styles/Home/profitChart";


// ==================================
// Componente do gráfico
// ==================================
export default function ProfitChart() {
  const screenWidth = Dimensions.get("window").width - 68;

  const labels = ["T1", "T2", "T3", "t4"];
  const data = [
    csvData.quarterResults.Q1.lucro / 1_000_000,
    csvData.quarterResults.Q2.lucro / 1_000_000,
    csvData.quarterResults.Q3.lucro / 1_000_000,
    csvData.quarterResults.Q4.lucro / 1_000_000,
  ];

  return (
    <View style={style.container}>
      <Text style={style.title}>Análise de Tendência Financeira</Text>
      <View style={style.chartContent}>
        <BarChart
            data={{
            labels,
            datasets: [{ data }],
            }}
            width={screenWidth}
            height={230}
            yAxisLabel=""        
            yAxisSuffix="M"
            fromZero
            showValuesOnTopOfBars
            chartConfig={{
            backgroundGradientFrom: "#FFFFFF",
            backgroundGradientTo: "#FFFFFF",
            decimalPlaces: 0,
            color: () => color.green,
            labelColor: (opacity = 1) => `rgba(80, 80, 80, ${opacity})`,
            propsForLabels: { fontSize: 12 },
            barPercentage: 1,
            fillShadowGradient: color.green, 
            fillShadowGradientOpacity: 1, 
            propsForBackgroundLines: {
                strokeWidth: 0, 
            },
            }}
            style={style.chart}
        />
      </View>
    </View>
  );
}

