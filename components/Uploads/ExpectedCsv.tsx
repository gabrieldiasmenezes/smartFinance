import { View, Text } from "react-native";
import color from "../color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Pipeline from "./ExpectedCsv/Pipeline";
import Table from "./ExpectedCsv/Table";
import style from "@/styles/Uploads/expectedCsv";

export default function ExpectedCsv() {
  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <MaterialCommunityIcons name="file-table" size={30} color={color.green} />
        <Text style={style.title}>Formato CSV necessário</Text>
      </View>

      {/* Texto explicativo */}
      <Text style={style.text}>
        O usuário deve enviar um arquivo CSV contendo os dados{" "}
        <Text style={style.bold}>trimestrais</Text> de cada{" "}
        <Text style={style.bold}>departamento</Text>, incluindo as colunas de{" "}
        <Text style={style.bold}>receita</Text>,{" "}
        <Text style={style.bold}>despesa</Text> e{" "}
        <Text style={style.bold}>orçamento</Text>.{" "}
        A IA processa o conteúdo, identifica automaticamente os departamentos, ajusta formatações e calcula{" "}
        <Text style={style.bold}>lucro</Text> e{" "}
        <Text style={style.bold}>KPIs estratégicos</Text> com base nos valores enviados.
      </Text>

      {/* Pipeline */}
      <Pipeline />

      {/* Tabela de exemplo */}
      <Table />

      {/* Rodapé */}
      <View style={style.footer}>
        <View style={style.footerIcon}>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={20} color={color.green} />
        </View>
        <Text style={style.footerText}>
          Após o envio do CSV trimestral, a{" "}
          <Text style={style.bold}>IA Generativa</Text> interpreta os dados, normaliza nomes de departamentos e gera{" "}
          <Text style={style.bold}>KPIs</Text> e{" "}
          <Text style={style.bold}>insights financeiros</Text> automaticamente para o dashboard.
        </Text>
      </View>
    </View>
  );
}

