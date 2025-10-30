// src/components/Chat/chatUtils.ts
import { Message } from "@/types/types";
import { Dispatch, SetStateAction } from "react";


/**
 * Envia a mensagem do usuário e simula uma resposta do bot.
 */
export const handleSendMessage = (
  input: string,
  setInput: Dispatch<SetStateAction<string>>,
  setMessages: Dispatch<SetStateAction<Message[]>>
) => {
  if (!input.trim()) return;

  const userMsg: Message = { id: Date.now(), from: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  // Simulação da IA
  setTimeout(() => {
    const botMsg: Message = {
      id: Date.now() + 1,
      from: "bot",
      text: "🤖 Analisando seus dados financeiros... (resposta simulada da IA)",
    };
    setMessages((prev) => [...prev, botMsg]);
  }, 1000);
};
