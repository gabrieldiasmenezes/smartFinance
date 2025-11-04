import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import Markdown from "react-native-markdown-display";
import { Message } from "@/types/types";
import color from "@/components/color";
import style from "@/styles/Chat/chatMessage";

type Props = {
  messages: Message[];
  isTyping?: boolean;
};

export default function ChatMessages({ messages, isTyping }: Props) {
  return (
    <ScrollView contentContainerStyle={style.scrollContent}>
      {messages.map((msg) => (
        <View
          key={msg.id}
          style={[
            style.messageBubble,
            msg.from === "user" ? style.userBubble : style.botBubble,
          ]}
        >
          {msg.from === "bot" ? (
            <Markdown
              style={{
                body: style.botText,
                heading1: { fontSize: 20, fontWeight: "700", color: color.green },
                heading2: { fontSize: 18, fontWeight: "600", color: color.green },
                bullet_list: { marginVertical: 4 },
                list_item: { marginVertical: 2 },
                strong: { fontWeight: "700" },
                link: { color: color.green },
              }}
            >
              {msg.text}
            </Markdown>
          ) : (
            <Text style={[style.messageText, style.userText]}>{msg.text}</Text>
          )}
        </View>
      ))}

      {isTyping && (
        <View style={style.typingBubble}>
          <ActivityIndicator size="small" color={color.green} />
          <Text style={style.typingText}>Digitando...</Text>
        </View>
      )}
    </ScrollView>
  );
}
