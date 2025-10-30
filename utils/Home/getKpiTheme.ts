import color from "@/components/color"
import kpi from "@/types/csvType"

function getIcon(icon:string){
    switch (icon) {
      case "Receita Total":
        return "currency-usd";

      case "Despesas Operacionais":
        return "trending-down";

      case "Margem de Lucro Líquido":
        return "chart-bar";

      case "Otimização de Custos":
        return "cog-outline";

      default:
        return "information-outline";
    }
}
export default function getKpiTheme(kpi:kpi){
    const itensTheme={
        headerIcon:getIcon(kpi.titulo),
        footerIcon:"brain",
        footerColor: color.gray,
        despesaColor:color.gray
    };

    const variacao= parseFloat(kpi.variacao.replace("%", ""));

    if (kpi.id <= 3) {
      if (variacao > 0) {
        itensTheme.footerIcon = "trending-up";
        itensTheme.footerColor = color.green;
      } else if (variacao < 0) {
        itensTheme.footerIcon = "trending-down";
        itensTheme.footerColor = color.red;
      }
    }

    if (kpi.id === 2) {
      if (variacao > 0) itensTheme.despesaColor = color.red;
      else if (variacao < 0) itensTheme.despesaColor = color.green;
    }

    return itensTheme;

}

