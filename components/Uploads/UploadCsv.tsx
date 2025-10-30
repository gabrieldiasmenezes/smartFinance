import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../color";
import styles from "@/styles/Uploads/uploadCsv";
import { handlePickFile } from "@/utils/Uploads/handlePickFile";

type UploadCsvProps = {
  onDataParsed?: (data: any[]) => void;
};

export default function UploadCsv({ onDataParsed }: UploadCsvProps) {
  const [fileName, setFileName] = useState<string | null>(null);


  return (
    <View style={styles.card}>
      {/* 🔹 Título com ícone */}
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
        <Text style={styles.textSub}>ou clique para navegar no seu sistema</Text>

        <TouchableOpacity style={styles.button} onPress={()=>handlePickFile(setFileName,onDataParsed)}>
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

