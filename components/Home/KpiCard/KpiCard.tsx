// src/components/KpiCard.tsx
import style from "@/styles/Home/kpiCard";
import React from "react";
import { Text, View } from "react-native";
import { HeaderIconTheme, SubIconTheme } from "../../../utils/IconTheme";
import { getVariationTheme } from "./getVariationTheme";

type KpiCardProps = {
  titulo: string;
  valor: string;
  variacao: string;
  descricao: string;
};

export default function KpiCard({ titulo, valor, variacao, descricao }: KpiCardProps) {
  // Pega cor e ícone conforme lógica corporativa
  const theme = getVariationTheme({titulo, variacao});

  return (
    <View style={style.cardKpi}>
      {/* Cabeçalho */}
      <View style={style.headerKpi}>
        <Text style={style.title}>{titulo}</Text>
        <HeaderIconTheme titulo={titulo} />
      </View>

      {/* Valor principal */}
      <Text style={style.value}>{valor}</Text>

      {/* Descrição */}
      <Text style={style.description}>{descricao}</Text>

      {/* Variação */}
      <View style={style.trend}>
        <SubIconTheme titulo={titulo} variacao={variacao} />
        <Text style={[style.trendText, { color: theme.color }]}>
          {" "}
          {variacao}
        </Text>
      </View>
    </View>
  );
}
