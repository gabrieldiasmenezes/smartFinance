// src/components/Chat/Chat.tsx
import ChatInput from "@/components/Chat/ChatInput";
import ChatMessages from "@/components/Chat/ChatMessages";
import style from "@/styles/Chat/chat";
import { Message } from "@/types/types";
import { handleSendMessage } from "@/utils/Chat/chat";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";


export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Olá 👋 Sou sua assistente financeira! Como posso te ajudar hoje?",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => handleSendMessage(input, setInput, setMessages);

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 70}
    >
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 90,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <ChatMessages messages={messages} />
      </ScrollView>

      <ChatInput input={input} setInput={setInput} onSend={sendMessage} />
    </KeyboardAvoidingView>
  );
}
