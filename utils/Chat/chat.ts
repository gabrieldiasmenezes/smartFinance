// src/utils/Chat/chatUtils.ts
import { Message } from "@/types/types";
import { Dispatch, SetStateAction } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, model } from "@/firebaseConfig"; // importa Gemini + Firestore

/**
 * Função que busca dados do Firestore
 */
async function fetchFinanceData() {
  const snapshot = await getDocs(collection(db, "trimestres"));
  const data = snapshot.docs.map((doc) => doc.data());
  return data;
}

/**
 * Envia a mensagem do usuário e obtém resposta da IA baseada nos dados do Firebase.
 */
export const handleSendMessage = async (
  input: string,
  setInput: Dispatch<SetStateAction<string>>,
  setMessages: Dispatch<SetStateAction<Message[]>>
) => {
  if (!input.trim()) return;

  // Mensagem do usuário
  const userMsg: Message = { id: Date.now(), from: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  try {
    // 1️⃣ Carrega dados financeiros do Firestore
    const dadosFinanceiros = await fetchFinanceData();

    // 2️⃣ Cria prompt contextualizado
    const prompt = `
      Você é uma assistente financeira chamada Finance AI.
      Analise os seguintes dados de desempenho trimestral:

      ${JSON.stringify(dadosFinanceiros, null, 2)}

      O usuário perguntou:
      "${input}"

      Responda de forma clara, usando insights baseados nesses dados.
      Se possível, mostre tendências, crescimento ou quedas financeiras.
    `;

    // 3️⃣ Envia para o modelo Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    // 4️⃣ Adiciona resposta da IA
    const botMsg: Message = {
      id: Date.now() + 1,
      from: "bot",
      text: response || "Não consegui analisar os dados no momento 😅",
    };
    setMessages((prev) => [...prev, botMsg]);
  } catch (error) {
    console.error("Erro ao gerar resposta da IA:", error);
    const botMsg: Message = {
      id: Date.now() + 1,
      from: "bot",
      text: "❌ Ocorreu um erro ao buscar ou analisar os dados financeiros.",
    };
    setMessages((prev) => [...prev, botMsg]);
  }
};
