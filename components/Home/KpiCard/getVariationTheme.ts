import { IconThemeProps } from "@/types/types";
import color from "../../color";

// Função que define ícone e cor de acordo com o KPI
export function getVariationTheme({titulo,variacao}:IconThemeProps) {
  const theme = {
    name: "brain",
    color: color.gray,
  };

  if (!variacao) return theme;

  // Se não for percentual (%), considera neutro
  if (!variacao.includes("%")) {
    theme.name = "cash"; // pode ser "cash" ou "information-outline"
    theme.color = color.gray;
    return theme;
  }

  // Caso seja uma variação percentual → calcula tendência
  const value = parseFloat(variacao.replace("%", ""));
  const isPositive = value > 0;

  const tituloLower = titulo.toLowerCase();

  // KPI de Despesa → lógica invertida
  if (tituloLower.includes("despesa")) {
    theme.name = isPositive ? "trending-down" : "trending-up";
    theme.color = isPositive ? color.red : color.green;
  }
  // KPI de Lucro ou Margem → lógica normal (acima é bom)
  else if (tituloLower.includes("lucro") || tituloLower.includes("margem")) {
    theme.name = isPositive ? "trending-up" : "trending-down";
    theme.color = isPositive ? color.green : color.red;
  }
  // KPI de Receita ou genéricos
  else {
    theme.name = isPositive ? "trending-up" : "trending-down";
    theme.color = isPositive ? color.green : color.red;
  }

  return theme;
}