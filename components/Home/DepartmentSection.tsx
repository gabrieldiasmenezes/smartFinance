import { View, Text } from "react-native";
import style from "@/styles/Home/department";
import { departaments, totalDepartamentos } from "@/utils/Home/departmentItens";

// Função utilitária para exibir milhões com 1 casa decimal
const formatMilhoes = (valor: number) => (valor / 1_000_000).toFixed(1);

export default function DepartmentSection() {
  return (
    <View style={style.departmentsContainer}>
      <Text style={style.title}>Gasto por Departamento</Text>
      <Text style={style.subTitle}>Alocação de orçamento anual</Text>

      {departaments.map((dep) => {
        const perc = (dep.orcamentoAnual / totalDepartamentos) * 100;
        const orcText = formatMilhoes(dep.orcamentoAnual);

        return (
          <View key={dep.id} style={style.departmentContent}>
            <View style={style.textContent}>
              <Text style={style.subTitle}>{dep.name}</Text>
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
