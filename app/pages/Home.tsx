// src/pages/Home.tsx
import React from "react";
import { ScrollView,View } from "react-native";
import style from "@/styles/home";
import KpiCard from "../../components/KpiCard";
import csvData from "@/components/csvData";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import color from "@/components/color";


export default function Home() {
  return (
    <ScrollView contentContainerStyle={style.container}>
        <View style={style.logoContainer}>
            <View style={style.logo}>
                <FontAwesome6 name="signal" size={30} color={color.background} />
            </View>
        </View>
      {csvData.map((item, index) => (
        <KpiCard
          key={index}
          titulo={item.titulo}
          iconeHeader={item.iconeHeader}
          valor={item.valor}
          variacao={item.variacao}
          iconeTrend={item.iconeTrend}
          corTrend={item.corTrend}
          descricao={item.descricao}
        />
      ))}
    </ScrollView>
  );
}
