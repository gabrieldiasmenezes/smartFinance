import React from "react";
import { View, Text, StyleProp, TextStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "./color";
import style from "@/styles/kpiCard";

// --------------------
// Tipagem
// --------------------
type IconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type KpiCardProps = {
  titulo: string;
  iconeHeader: IconName | string;
  valor: string;
  variacao: string;
  iconeTrend: IconName | string;
  corTrend?: string;
  descricao?: string;
};

// --------------------
// Constantes
// --------------------
const FALLBACK_ICON: IconName = "help-circle-outline";
const FALLBACK_COLOR = color.gray;

// --------------------
// Componente
// --------------------
export default function KpiCard({
  titulo,
  iconeHeader,
  valor,
  variacao,
  iconeTrend,
  corTrend = "gray",
  descricao,
}: KpiCardProps) {
  // --------------------
  // Helpers para ícones e cores
  // --------------------
  const safeHeaderIcon: IconName = (iconeHeader || FALLBACK_ICON) as IconName;
  const safeTrendIcon: IconName = (iconeTrend || FALLBACK_ICON) as IconName;

  const trendColor: string =
    corTrend === "green"
      ? color.green
      : corTrend === "red"
      ? color.red
      : FALLBACK_COLOR;

  const valueStyle: StyleProp<TextStyle> =
    corTrend === "green"
      ? [style.value, { color: color.green }]
      : corTrend === "red"
      ? [style.value, { color: color.red }]
      : style.value;

  // --------------------
  // JSX
  // --------------------
  return (
    <View style={style.cardKpi}>
      {/* Cabeçalho */}
      <View style={style.headerKpi}>
        <Text style={style.title}>{titulo}</Text>
        <MaterialCommunityIcons
          name={safeHeaderIcon}
          size={24}
          color={color.gray}
        />
      </View>

      {/* Valor principal */}
      <Text style={valueStyle}>{valor}</Text>

      {/* Linha de tendência */}
      <View style={style.trend}>
        <MaterialCommunityIcons
          name={safeTrendIcon}
          size={18}
          color={trendColor}
        />
        <Text style={[style.trendText, { color: trendColor }]}>
          {" "}
          {variacao}
        </Text>
      </View>

      {/* Descrição opcional */}
      {descricao && (
        <Text style={{ color: color.gray, fontSize: 13, marginTop: 6 }}>
          {descricao}
        </Text>
      )}
    </View>
  );
}
