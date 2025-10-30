// src/components/Chat/chatStyle.ts
import { StyleSheet } from "react-native";
import color from "@/components/color";

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
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
  inputContainer: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    borderColor: color.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    color: color.text,
  },
  sendButton: {
    backgroundColor: color.green,
    marginLeft: 10,
    borderRadius: 25,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;