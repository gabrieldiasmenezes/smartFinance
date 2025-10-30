import React from "react";
import { Text, View } from "react-native";
import LineGraph from "./LineGraph";
import style from "@/styles/Home/lineChart";

export default function LineChartSection() {

  return (
    <View style={style.container}>
      <Text style={style.title}>Comparativo Receita × Lucro</Text>

      <LineGraph/>

      <Text style={style.subtitle}>
        Visualize a evolução da Receita e do Lucro ao longo do ano
      </Text>
    </View>
  );
}

