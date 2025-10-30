import { MaterialCommunityIcons } from "@expo/vector-icons";

export function getIconName(departmentName: string): keyof typeof MaterialCommunityIcons.glyphMap {
  const name = departmentName.toLowerCase();

  if (name.includes("engenharia") || name.includes("tech") || name.includes("dev")) return "cog";
  if (name.includes("produto") || name.includes("product")) return "cube-outline";
  if (name.includes("marketing") || name.includes("vendas") || name.includes("sales")) return "chart-line";
  if (name.includes("suporte") || name.includes("cs") || name.includes("customer")) return "headset";
  if (name.includes("rh") || name.includes("talento") || name.includes("people")) return "account-group";
  if (name.includes("financeiro") || name.includes("finance") || name.includes("cash")) return "cash-multiple";
  if (name.includes("operação") || name.includes("operation") || name.includes("geral")) return "factory";

  // fallback para qualquer outro departamento
  return "office-building";
}
