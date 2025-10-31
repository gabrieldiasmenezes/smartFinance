// src/components/Chat/chatStyle.ts
import { StyleSheet } from "react-native";
import color from "@/components/color";

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  scrollContent:{
    paddingBottom: 90,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

export default style;