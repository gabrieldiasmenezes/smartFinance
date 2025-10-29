import React from "react";
import { View, Text } from "react-native";
import color from "@/components/color";
import { style } from "@/styles/Home/department";

interface DepartamentSectionProps {
  setoresValores: { [key: string]: number }; // valores em milhões
}

export default function DepartamentSection({ setoresValores }: DepartamentSectionProps) {

  return (
    <View style={style.container}>
      {/* Título e subtítulo */}
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#222" }}>
          Gasto por departamento
        </Text>
        <Text style={{ fontSize: 14, color: "#555", marginTop: 2 }}>
          Alocação de orçamento anual
        </Text>
      </View>

      {/* Barras de cada setor */}
      {Object.entries(setoresValores).map(([setor, valor]) => {
        const valorFormatado = Math.round(valor); // número inteiro

        return (
          <View key={setor} style={{ marginBottom: 16 }}>
            {/* Linha com nome e valor */}
            <View style={style.header}>
              <Text style={[style.label, { flex: 1 }]}>{setor}</Text>
              <Text style={[style.value, { textAlign: "right" }]}>${valorFormatado}M</Text>
            </View>

            {/* Barra de progresso abaixo */}
            <View style={style.barBackground}>
              <View
                style={[
                  style.barFill,
                  {
                    width: `${valor}%`,
                    backgroundColor: color.green,
                  },
                ]}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
