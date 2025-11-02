
import useTrimestres from "@/hooks/useTrimestres";
import style from "@/styles/Home/department";
import { Text, View } from "react-native";

const formatMilhoes = (valor: number) => (valor / 1_000_000).toFixed(1);

export default function DepartmentSection() {
  const { trimestres } = useTrimestres();

  // Soma por categoria
  const departamentoMap: Record<string, number> = {};
  let total = 0;
  trimestres.forEach(t => {
    departamentoMap[t.categoria] = (departamentoMap[t.categoria] || 0) + t.valor;
    total += t.valor;
  });

  const departamentos = Object.entries(departamentoMap).map(([name, orcamentoAnual], i) => ({
    id: i,
    name,
    orcamentoAnual
  }));

  return (
    <View style={style.departmentsContainer}>
      <Text style={style.title}>Gasto por Departamento</Text>
      <Text style={style.subTitle}>Alocação de orçamento anual</Text>

      {departamentos.map((dep) => {
        const perc = (dep.orcamentoAnual / total) * 100;
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
