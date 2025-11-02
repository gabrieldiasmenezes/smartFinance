import color from "@/components/color";
import useTrimestres from "@/hooks/useTrimestres";
import style from "@/styles/Home/kpiCard";
import getKpiTheme from "@/utils/Home/getKpiTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, Text, View } from "react-native";

export default function KpiCard() {
  const { trimestres, loading } = useTrimestres();

  if (loading) return <ActivityIndicator size="large" color={color.green} />
;

  if (!trimestres || trimestres.length === 0) {
    return <Text style={{ textAlign: "center", marginTop: 20 }}>Nenhum dado disponível</Text>;
  }

  // Calcula os totais somando os valores de todos os trimestres
  const totalReceita = trimestres.reduce((acc, t) => acc + (t.receita || 0), 0);
  const totalDespesas = trimestres.reduce((acc, t) => acc + (t.despesa || 0), 0);
  const totalLucro = trimestres.reduce((acc, t) => acc + (t.lucro || 0), 0);

  // Calcula margem de lucro média
  const margemLucro = totalReceita > 0 ? ((totalLucro / totalReceita) * 100).toFixed(1) : "0.0";

  const kpi = [
    {
      id: 1,
      titulo: "Receita Total",
      valor: `$${(totalReceita / 1e6).toFixed(2)}M`,
      variacao: "+7.5%",
      descricao: "Receita acumulada dos trimestres",
    },
    {
      id: 2,
      titulo: "Despesas Operacionais",
      valor: `$${(totalDespesas / 1e6).toFixed(2)}M`,
      variacao: "+3.1%",
      descricao: "Despesas totais do período",
    },
    {
      id: 3,
      titulo: "Margem de Lucro Líquido",
      valor: `${margemLucro}%`,
      variacao: "+2.2%",
      descricao: "Lucro líquido médio",
    },
  ];

  return (
    <>
      {kpi.map((k) => {
        const kpiTheme = getKpiTheme(k);
        return (
          <View key={k.id} style={style.kpiCard}>
            <View style={style.header}>
              <Text style={style.title}>{k.titulo}</Text>
              <MaterialCommunityIcons
                name={kpiTheme.headerIcon as any}
                size={20}
                color={color.gray}
              />
            </View>

            <Text style={style.text}>{k.valor}</Text>

            <View style={style.footer}>
              <MaterialCommunityIcons
                name={kpiTheme.footerIcon as any}
                size={20}
                color={k.id === 2 ? kpiTheme.despesaColor : kpiTheme.footerColor}
              />
              <Text
                style={[
                  style.textFooter,
                  {
                    color:
                      k.id === 2
                        ? kpiTheme.despesaColor
                        : kpiTheme.footerColor,
                  },
                ]}
              >
                {k.variacao}
              </Text>
            </View>

            <Text style={style.descricao}>{k.descricao}</Text>
          </View>
        );
      })}
    </>
  );
}
