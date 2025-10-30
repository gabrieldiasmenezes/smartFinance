import style from "@/styles/Home/insights";
import { InsightType } from "@/types/types";
import { Text, View } from "react-native";
import color from "./color";

interface InsightsProps {
  insights: InsightType[];
}

export default function Insights({ insights}: InsightsProps) {
  return (
    <View style={style.insightContainer}>
      <Text style={style.title}>Insights gerados por IA</Text>
      <Text style={style.subtitle}>Recomendações estratégicas baseadas em análise de dados financeiros</Text>

      {insights.map((insight) => (
        <View key={insight.id} style={[style.insightContainer, { borderColor: color.border }]}>
          <Text style={style.text}>
            <Text style={style.negrito}>
              <View style={style.ball} /> {insight.negrito}{" "}
            </Text>
            {insight.text}
          </Text>
        </View>
      ))}
    </View>
  );
}
