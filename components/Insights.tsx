import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import style from "@/styles/Home/insights";
import { InsightType } from "@/types/types";
import { getInsightsFromAI } from "@/utils/getInsights";
import color from "./color";

export default function Insights() {
  const [insights, setInsights] = useState<InsightType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsights() {
      const data = await getInsightsFromAI();
      setInsights(data);
      setLoading(false);
    }
    loadInsights();
  }, []);

  if (loading) {
    return (
      <View style={style.insightContainer}>
        <Text style={style.title}>Insights gerados por IA</Text>
        <ActivityIndicator size="small" color={color.green} />
      </View>
    );
  }

  return (
    <View style={style.insightContainer}>
      <Text style={style.title}>Insights gerados por IA</Text>
      <Text style={style.subtitle}>
        Recomendações estratégicas baseadas em análise de dados financeiros
      </Text>

      {insights.map((insight) => (
        <View
          key={insight.id}
          style={[style.insightContainer, { borderColor: color.border }]}
        >
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
