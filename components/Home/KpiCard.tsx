import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import style from "@/styles/Home/kpiCard";
import color from "@/components/color";
import csvData from "@/data/csvData";
import getKpiTheme from "@/utils/Home/getKpiTheme";

export default function KpiCard() {
  const kpi = csvData.kpi;

  return (
    <>
      {kpi.map((k) => {
        const kpiTheme=getKpiTheme(k); // gera um config isolado
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
                      k.id === 2 ? kpiTheme.despesaColor : kpiTheme.footerColor,
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
