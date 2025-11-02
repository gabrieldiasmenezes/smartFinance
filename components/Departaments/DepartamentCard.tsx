import useTrimestres from "@/hooks/useTrimestres";
import style from "@/styles/Department/departmentCard";
import { getIconName } from "@/utils/Department/getIconName";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import color from "../color";

const formatMilhoes = (valor: number) => (valor / 1_000_000).toFixed(1);

export default function DepartmentCard() {
  const { trimestres } = useTrimestres();

  // Soma os setores de todos os trimestres
  const somaSetores: Record<string, number> = {};

  trimestres.forEach((t) => {
    Object.entries(t.setores).forEach(([nome, valor]) => {
      somaSetores[nome] = (somaSetores[nome] || 0) + valor;
    });
  });

  const total = Object.values(somaSetores).reduce((a, b) => a + b, 0);

  const departamentos = Object.entries(somaSetores).map(([name, orcamentoAnual], i) => ({
    id: i,
    name,
    orcamentoAnual,
  }));

  return (
    <View style={style.departmentsContainer}>
      <Text style={style.title}>Gasto por Departamento</Text>
      <Text style={style.subTitle}>Alocação de orçamento anual</Text>

      {departamentos.map((dep) => {
        const perc = (dep.orcamentoAnual / total) * 100;
        const orcText = formatMilhoes(dep.orcamentoAnual);
        const icon = getIconName(dep.name);

        return (
          <View key={dep.id} style={style.departmentContent}>
            <View style={style.textContent}>
              <View style={style.content}>
                <View style={style.iconContent}>
                  <MaterialCommunityIcons name={icon} size={30} color={color.green} />
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
