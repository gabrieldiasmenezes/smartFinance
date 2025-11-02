import styles from "@/styles/Uploads/uploadCsv";
import { handlePickFile } from "@/utils/Uploads/handlePickFile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import color from "../color";

import { db } from "@/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

export default function UploadCsv() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSaveToFirestore = async (data: any[]) => {
    try {
      console.log("Dados originais do CSV:", JSON.stringify(data, null, 2));

      // Função auxiliar para converter strings numéricas em números
      const toNumber = (val: any): number => {
        if (typeof val === "number") return val;
        if (!val) return 0;
        const cleaned = String(val).replace(/\./g, "").replace(/,/g, "").trim();
        const parsed = Number(cleaned);
        return isNaN(parsed) ? 0 : parsed;
      };

      const promises = data
        .map((item) => {
          const trimestre = item.TRIMESTRE || item.Trimestre || item.trimestre;
          if (!trimestre) return null;

          const body = {
            trimestre: String(trimestre),
            receita: toNumber(item.RECEITA || item.Receita || item.receita),
            despesa: toNumber(item.DESPESA || item.Despesa || item.despesa),
            lucro: toNumber(item.LUCRO || item.Lucro || item.lucro),
            setores: {
              engenharia: toNumber(
                item.ENGENHARIA || item.Engenharia || item.engenharia
              ),
              produtos: toNumber(
                item.PRODUTOS || item.Produtos || item.produtos
              ),
              vendas: toNumber(item.VENDAS || item.Vendas || item.vendas),
              suporte_e_cs: toNumber(
                item["SUPORTE E CS"] ||
                  item["Suporte E CS"] ||
                  item["SUPORTE & CS"]
              ),
              rh_e_talentos: toNumber(
                item["RH E TALENTOS"] || item["RH & TALENTOS"]
              ),
              financeiro: toNumber(
                item.FINANCEIRO || item.Financeiro || item.financeiro
              ),
              operacoes_gerais: toNumber(
                item["OPERACOES GERAIS"] || item["OPERAÇÕES GERAIS"]
              ),
            },
          };

          console.log("🧮 Corpo pronto para salvar:", body);

          const docRef = doc(collection(db, "trimestres"), String(trimestre));
          return setDoc(docRef, body, { merge: true });
        })
        .filter(Boolean);

      await Promise.all(promises as Promise<void>[]);

      console.log("✅ Todos documentos gravados corretamente em trimestres/");
      Toast.show({ type: "success", text1: "CSV importado com sucesso!" });
      Alert.alert("Sucesso", "Arquivo importado e salvo no Firestore.");
    } catch (err) {
      console.error("Erro ao salvar no Firestore:", err);
      Alert.alert("Erro", "Não foi possível salvar os dados no Firestore.");
      Toast.show({ type: "error", text1: "Erro ao importar CSV" });
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="file-upload-outline"
          size={30}
          color={color.green}
        />
        <Text style={styles.title}>Importar Dados Financeiros</Text>
      </View>

      <View style={styles.uploadBox}>
        <MaterialCommunityIcons
          name="arrow-down-bold"
          size={40}
          color={color.gray}
        />
        <Text style={styles.textMain}>Arraste e solte o arquivo CSV aqui</Text>
        <Text style={styles.textSub}>
          ou clique para navegar no seu sistema
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePickFile(setFileName, handleSaveToFirestore)}
        >
          <Text style={styles.buttonText}>Selecionar Arquivo</Text>
        </TouchableOpacity>

        {fileName && (
          <Text style={styles.fileName}>
            <MaterialCommunityIcons
              name="check-circle"
              size={14}
              color={color.green}
            />{" "}
            {fileName}
          </Text>
        )}
      </View>
    </View>
  );
}
