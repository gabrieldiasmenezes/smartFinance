// src/utils/getInsightsFromAI.ts
import { collection, getDocs } from "firebase/firestore";
import { db, model } from "@/firebaseConfig"; 
import { InsightType } from "@/types/types";

/**
 * Função genérica que busca dados financeiros no Firestore.
 */
async function fetchFinanceData() {
  const snapshot = await getDocs(collection(db, "trimestres"));
  const data = snapshot.docs.map((doc) => doc.data());
  return data;
}

/**
 * Função que gera insights automáticos a partir dos dados financeiros.
*/
export async function getInsightsFromAI(): Promise<InsightType[]> {
  try {
    // 1️⃣ Busca dados no Firestore
    const dadosFinanceiros = await fetchFinanceData();

    // 2️⃣ Cria prompt direcionado para geração de insights
    const prompt = `
      Você é uma analista financeira experiente.
      Analise os seguintes dados trimestrais da empresa:

      ${JSON.stringify(dadosFinanceiros, null, 2)}

      Gere 5 insights financeiros no seguinte formato JSON:
      [
        {
          "id": 1,
          "negrito": "Resumo principal do insight",
          "text": "Explicação detalhada e recomendação estratégica."
        }
      ]

      Diretrizes:
      - Cada insight deve ter no máximo 200 caracteres.
      - Use linguagem profissional,objetiva e clara.
      - Os insights devem destacar tendências, eficiência operacional e oportunidades de otimização.
      - Nunca inclua texto fora do formato JSON.
    `;

    // 3️⃣ Envia o prompt ao modelo Gemini
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    // 4️⃣ Extrai apenas o JSON válido
    const jsonStart = responseText.indexOf("[");
    const jsonEnd = responseText.lastIndexOf("]") + 1;
    const jsonText = responseText.slice(jsonStart, jsonEnd);

    const insights: InsightType[] = JSON.parse(jsonText);

    return insights;
  } catch (error) {
    console.error("Erro ao gerar insights:", error);

    return [
      {
        id: 1,
        negrito: "Erro ao gerar insights",
        text: "Não foi possível gerar recomendações automáticas no momento. Tente novamente mais tarde.",
      },
    ];
  }
}
