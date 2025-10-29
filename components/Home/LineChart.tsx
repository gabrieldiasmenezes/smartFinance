// src/components/LineChartLucro.tsx
import color from "@/components/color";
import { style } from "@/styles/Home/lineChart";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

interface LineChartLucroProps {
  meses: string[];
  lucroPorMes: number[];
}

export default function LineChartLucro({ meses, lucroPorMes }: LineChartLucroProps) {
  return (
    <View style={style.card}>
      <Text style={style.title}>Lucro Mensal (em milhões)</Text>

      <LineChart
        data={{
          labels: meses,
          datasets: [
            {
              data: lucroPorMes,
              color: () => color.green,
              strokeWidth: 3,
            },
          ],
        }}
        width={Dimensions.get("window").width - 60}
        height={240}
        yAxisSuffix="M"
        withShadow={false}
        withInnerLines={false}
        withOuterLines={false}
        chartConfig={{
          backgroundGradientFrom: color.background,
          backgroundGradientTo: color.background,
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity * 0.7})`,
          propsForDots: {
            r: "5",
            strokeWidth: "2",
            stroke: color.background,
          },
          propsForBackgroundLines: {
            strokeDasharray: "",
            stroke: color.background,
          },
        }}
        bezier
        style={style.chart}
      />
    </View>
  );
}
