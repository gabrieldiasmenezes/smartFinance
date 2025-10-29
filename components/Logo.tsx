// src/pages/Home.tsx
import React from "react";
import {View } from "react-native";

import { FontAwesome6} from "@expo/vector-icons";
import color from "@/components/color";
import style from "@/styles/logo";


export default function Logo() {
  return (
    <View style={style.logoContainer}>
        <View style={style.logo}>
            <FontAwesome6 name="signal" size={30} color={color.background} />
        </View>
    </View>
  );
}
