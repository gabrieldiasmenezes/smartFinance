// src/components/Chat/chatStyle.ts
import { StyleSheet } from "react-native";
import color from "@/components/color";

const style= StyleSheet.create({
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