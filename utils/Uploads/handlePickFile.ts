import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";
import { Platform } from "react-native";

/**
 * Seleciona e lê um arquivo CSV, funcionando tanto no Web quanto em Mobile
 * @param setFileName Atualiza o nome do arquivo selecionado
 * @param onDataParsed Callback chamado com os dados do CSV parseado
 */
export const handlePickFile = async (
  setFileName: (name: string | null) => void,
  onDataParsed?: (data: any[]) => void
) => {
  try {
    if (Platform.OS === "web") {
      // WEB: usamos input file
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".csv";
  // apenas CSV
      input.onchange = async (e: any) => {
        const file = e.target.files[0];
        if (!file) return;

        setFileName(file.name);

        const text = await file.text(); // lê conteúdo do arquivo
        const parsed = Papa.parse(text, { header: true });
        console.log("✅ CSV convertido (Web):", parsed.data);

        onDataParsed?.(parsed.data);
      };
      input.click();
    } else {
      // MOBILE: DocumentPicker + FileSystem
      const result = await DocumentPicker.getDocumentAsync({
        type: "text/csv",
        copyToCacheDirectory: true,
      });

      if (result.canceled) return;

      const file = result.assets[0];
      setFileName(file.name);

      const fileContent = await FileSystem.readAsStringAsync(file.uri, {
        encoding: "utf8",
      });

      const parsed = Papa.parse(fileContent, { header: true });
      console.log("✅ CSV convertido (Mobile):", parsed.data);

      onDataParsed?.(parsed.data);
    }
  } catch (error) {
    console.error("❌ Erro ao carregar CSV:", error);
  }
};
