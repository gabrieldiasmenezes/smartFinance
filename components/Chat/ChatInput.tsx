// src/components/Chat/ChatInput.tsx
import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "@/components/color";
import style from "@/styles/Chat/chatInput";

type Props = {
  input: string;
  setInput: (text: string) => void;
  onSend: () => void;
};

export default function ChatInput({ input, setInput, onSend }: Props) {
  return (
    <View style={style.inputContainer}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Digite sua pergunta financeira..."
        placeholderTextColor={color.gray}
        style={style.input}
      />

      <TouchableOpacity onPress={onSend} style={style.sendButton}>
        <MaterialCommunityIcons
          name="send"
          size={22}
          color={color.background}
        />
      </TouchableOpacity>
    </View>
  );
}
