import style from "@/styles/Uploads/ExpectedCsv/table";
import React from "react";
import { Text, View } from "react-native";

export default function Table() {
  const table = {
    header: ["Trimestre", "Receita", "Despesa", "Lucro", "Engenharia"],
    trimestres: [
      { tri: "1º Tri (Jan–Mar)", receita: "$725M", despesa: "$543M", lucro: "$182M", eng: "$250M" },
      { tri: "2º Tri (Abr–Jun)", receita: "$760M", despesa: "$560M", lucro: "$200M", eng: "$250M" },
      { tri: "3º Tri (Jul–Set)", receita: "$810M", despesa: "$585M", lucro: "$225M", eng: "$250M" },
      { tri: "4º Tri (Out–Dez)", receita: "$855M", despesa: "$608M", lucro: "$247M", eng: "$250M" },
    ],
  };

  return (
    <View style={style.table}>
      {/* Header */}
      <View style={[style.row, style.headerRow]}>
        <Text style={[style.cell, style.triCell, style.headerCell]}>{table.header[0]}</Text>
        <Text style={[style.cell, style.numCell, style.headerCell]}>{table.header[1]}</Text>
        <Text style={[style.cell, style.numCell, style.headerCell]}>{table.header[2]}</Text>
        <Text style={[style.cell, style.numCell, style.headerCell]}>{table.header[3]}</Text>
        <Text style={[style.cell, style.lastCell, style.headerCell]}>{table.header[4]}</Text>
      </View>

      {/* Rows */}
      {table.trimestres.map((item, idx) => (
        <View key={idx} style={[style.row, idx % 2 === 0 && style.altRow]}>
          <Text style={[style.cell, style.triCell]} numberOfLines={1} ellipsizeMode="tail">
            {item.tri}
          </Text>
          <Text style={[style.cell, style.numCell, style.receita]}>{item.receita}</Text>
          <Text style={[style.cell, style.numCell, style.despesa]}>{item.despesa}</Text>
          <Text style={[style.cell, style.numCell, style.lucro]}>{item.lucro}</Text>
          <Text style={[style.cell, style.lastCell]}>{item.eng}</Text>
        </View>
      ))}
    </View>
  );
}
