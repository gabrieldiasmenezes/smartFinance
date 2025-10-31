// src/components/Chat/chatStyle.ts
import { StyleSheet } from "react-native";
import color from "@/components/color";

const style= StyleSheet.create({
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

});

export default style;