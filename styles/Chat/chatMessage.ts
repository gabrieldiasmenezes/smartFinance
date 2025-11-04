// src/components/Chat/chatStyle.ts
import { StyleSheet } from "react-native";
import color from "@/components/color";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    paddingHorizontal: 16,
    paddingBottom: 10,
  },

  scrollContent: {
    paddingVertical: 12,
  },

  // 💬 Bolhas de mensagem
  messageBubble: {
    borderRadius: 16,
    marginVertical: 6,
    padding: 12,
    maxWidth: "80%",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: color.green,
  },
  botBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: color.border,
  },

  // 🧠 Texto
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userText: {
    color: color.background,
  },
  botText: {
    color: color.text,
  },

  // ✍️ Indicador de digitando
  typingBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 6,
  },
  typingText: {
    color: color.text,
    fontSize: 14,
    opacity: 0.8,
  },
});

export default style;
