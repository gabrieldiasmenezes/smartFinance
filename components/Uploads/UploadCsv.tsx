import styles from "@/styles/Uploads/uploadCsv";
import { handlePickFile } from "@/utils/Uploads/handlePickFile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import color from "../color";


import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export default function UploadCsv() {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSaveToFirestore = async (data: any[]) => {
    try {
      for (const item of data) {
        await addDoc(collection(db, "transacoes"), {
          descricao: item.Descrição || item.descricao || "Sem descrição",
          categoria: item.Categoria || item.categoria || "Outros",
          valor: parseFloat(item.Valor || item.valor || 0),
          data: item.Data || item.data || new Date().toISOString(),
        });
      }
      Alert.alert("Sucesso", "✅ Arquivo importado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar no Firestore:", error);
      Alert.alert("Erro", "❌ Não foi possível importar os dados.");
    }
    Toast.show({
      type: "success",
      text1: "Arquivo importado com sucesso!",
    });
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
          onPress={() =>
            handlePickFile(setFileName, (data) => {
              handleSaveToFirestore(data);
            })
          }
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
