// src/components/Chat/ChatMessages.tsx
import React from "react";
import { View, Text } from "react-native";
import { Message } from "@/types/types";
import style from "@/styles/Chat/chatMessage";


export default function ChatMessages({ messages }: { messages: Message[] }) {
  return (
    <>
      {messages.map((msg) => (
        <View
          key={msg.id}
          style={[
            style.messageBubble,
            msg.from === "user"
              ? style.userBubble
              : style.botBubble,
          ]}
        >
          <Text
            style={[
              style.messageText,
              msg.from === "user"
                ? style.userText
                : style.botText,
            ]}
          >
            {msg.text}
          </Text>
        </View>
      ))}
    </>
  );
}
