import useTrimestres from "@/hooks/useTrimestres";
import style from "@/styles/Home/lineChart";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import color from "../color";

export default function LineGraph() {
  const { trimestres } = useTrimestres();
  const screenWidth = Dimensions.get("window").width - 64;

  const labels = trimestres.map((t) => t.trimestre);
  const receitaData = trimestres.map((t) => t.receita / 1_000_000);
  const lucroData = trimestres.map((t) => t.lucro / 1_000_000);

  return (
    <LineChart
      data={{
        labels,
        datasets: [
          { data: receitaData, color: () => `rgba(34,197,94,0.8)`, strokeWidth: 3 },
          { data: lucroData, color: () => `rgba(239,68,68,0.8)`, strokeWidth: 3 },
        ],
        legend: ["Receita", "Lucro"],
      }}
      width={screenWidth}
      height={280}
      yAxisSuffix="M"
      fromZero
      withShadow
      withInnerLines
      withOuterLines={false}
      bezier
      chartConfig={{
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#f8fafc",
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(50,50,50,${opacity})`,
        labelColor: (opacity = 0.7) => `rgba(80,80,80,${opacity})`,
        propsForDots: { r: "6", strokeWidth: "2", stroke: "#fff" },
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
