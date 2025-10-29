// src/components/Home/StackedBarChartReceitaDespesa.tsx
import React from "react";
import { View, Text, Dimensions } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";
import color from "@/components/color";
import { style } from "@/styles/Home/secondGraph";

interface SecondGraphProps {
  trimestres: string[];
  receita: number[];
  despesa: number[];
}

export default function SecondGraph({
  trimestres,
  receita,
  despesa,
}: SecondGraphProps) {
  const data = receita.map((r, i) => [r, despesa[i]]);

  return (
    <View style={style.card}>
      <Text style={style.title}>Receita vs Despesa (Trimestral)</Text>

      <StackedBarChart
        data={{
          labels: trimestres,
          legend: ["Receita", "Despesa"],
          data,
          barColors: [color.green, color.red],
        }}
        width={Dimensions.get("window").width - 60}
        height={240}
        yAxisSuffix="M"
        chartConfig={{
          backgroundGradientFrom: color.background,
          backgroundGradientTo: color.background,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0,${opacity * 0.7})`,
          propsForBackgroundLines: { stroke: color.background },
        }}
        style={style.chart}
        hideLegend={false}
        fromZero
      />
    </View>
  );
}
