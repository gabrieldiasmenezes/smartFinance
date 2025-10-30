import { View, Text } from "react-native";

import { departaments, totalDepartamentos } from "@/utils/Department/departmentCard";
import style from "@/styles/Department/departmentCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../color";
import { getIconName } from "@/utils/Department/getIconName";


// Função utilitária para exibir milhões com 1 casa decimal
const formatMilhoes = (valor: number) => (valor / 1_000_000).toFixed(1);

export default function DepartmentCard() {
  return (
    <View style={style.departmentsContainer}>
      <Text style={style.title}>Gasto por Departamento</Text>
      <Text style={style.subTitle}>Alocação de orçamento anual</Text>

      {departaments.map((dep) => {
        const perc = (dep.orcamentoAnual / totalDepartamentos) * 100;
        const orcText = formatMilhoes(dep.orcamentoAnual);
        const icon= getIconName(dep.name)
        return (
          <View key={dep.id} style={style.departmentContent}>
            <View style={style.textContent}>
                <View style={style.content}>
                    <View style={style.iconContent}>
                        <MaterialCommunityIcons name={icon} size={30} color={color.green}/>
                    </View>
                    <View>
                        <Text style={style.subTitle}>{dep.name}</Text>
                        <Text style={style.perc}>{perc.toFixed(0)}% do orçamento total</Text>

                    </View>
                </View>
              <Text style={style.subTitle}>${orcText}M</Text>
            </View>

            <View style={style.barBackground}>
              <View style={[style.barFill, { width: `${perc}%` }]} />
            </View>
          </View>
        );
      })}
    </View>
  );
}
