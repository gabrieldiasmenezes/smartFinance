import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
} from "react-native";
import ChatInput from "@/components/Chat/ChatInput";
import ChatMessages from "@/components/Chat/ChatMessages";
import style from "@/styles/Chat/chat";
import { Message } from "@/types/types";
import { handleSendMessage } from "@/utils/Chat/chat"; // ✅ import correto

export default function Chat() {
  const initialMessages: Message[] = [
    {
      id: 1,
      from: "bot",
      text: "Olá 👋 Sou sua assistente financeira! Como posso te ajudar hoje?",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // 👈 estado para 'digitando...'

  const sendMessage = async () => {
    if (!input.trim()) return;
    setIsTyping(true); // mostra o texto de "digitando..."
    await handleSendMessage(input, setInput, setMessages);
    setIsTyping(false);
  };

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 70}
    >
      <ScrollView
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ChatMessages messages={messages} />

        {isTyping && (
          <View style={{ alignSelf: "flex-start", marginLeft: 10, marginVertical: 6 }}>
            <Text style={{ color: "#888", fontStyle: "italic" }}>
              💬 Finance AI está digitando...
            </Text>
          </View>
        )}
      </ScrollView>

      <ChatInput input={input} setInput={setInput} onSend={sendMessage} />
    </KeyboardAvoidingView>
  );
}
