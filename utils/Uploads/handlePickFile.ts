import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

/**
 * Lógica para selecionar e ler um arquivo CSV
 * @param setFileName Função que atualiza o nome do arquivo selecionado
 * @param onDataParsed Callback chamado com os dados do CSV parseado
 */
export const handlePickFile = async (
  setFileName: (name: string | null) => void,
  onDataParsed?: (data: any[]) => void
) => {
  try {
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
    console.log("✅ CSV convertido:", parsed.data);

    onDataParsed?.(parsed.data);
  } catch (error) {
    console.error("❌ Erro ao carregar CSV:", error);
  }
};
