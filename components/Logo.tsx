// src/pages/Home.tsx
import React from "react";
import {View } from "react-native";
import style from "@/styles/home";
import { FontAwesome6} from "@expo/vector-icons";
import color from "@/components/color";


export default function Home() {
  return (
    <View style={style.logoContainer}>
        <View style={style.logo}>
            <FontAwesome6 name="signal" size={30} color={color.background} />
        </View>
    </View>
  );
}
