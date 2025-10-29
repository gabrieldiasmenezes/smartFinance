// src/components/IconTheme.tsx
import { IconThemeProps } from "@/types/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import color from "../components/color";
import { getVariationTheme } from "../components/Home/KpiCard/getVariationTheme";



// Ícone da variação
export function SubIconTheme({ titulo, variacao }: IconThemeProps) {
  const theme = getVariationTheme({titulo, variacao});
  return (
    <MaterialCommunityIcons
      name={theme.name as any}
      size={18}
      color={theme.color}
    />
  );
}

// Ícone fixo do cabeçalho
export function HeaderIconTheme({ titulo }: IconThemeProps) {
  let name = "brain";

  switch (titulo) {
    case "Receita Total":
      name = "cash-multiple";
      break;
    case "Despesas Operacionais":
      name = "bank-minus";
      break;
    case "Margem de Lucro Líquido":
      name = "chart-bar";
      break;
    case "Otimização de Custos":
      name = "cash-check";
      break;
  }

  return <MaterialCommunityIcons name={name as any} size={24} color={color.gray} />;
}


