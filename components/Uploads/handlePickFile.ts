import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

export const handlePickFile = async (
  setFileName: (name: string | null) => void,
  onDataParsed?: (data: any[]) => void
) => {
  try {
    const result: any = await DocumentPicker.getDocumentAsync({
      type: "text/csv",
      copyToCacheDirectory: true,
    });

    // Usuário cancelou
    if (result.type === "cancel") {
      console.log("❌ Nenhum arquivo selecionado.");
      return;
    }

    // 🔹 Usa name e uri diretamente
    const { name, uri } = result;

    setFileName(name);

    const fileContent = await FileSystem.readAsStringAsync(uri);

    const parsed = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    if (parsed.errors.length > 0) {
      console.error("⚠️ Erros ao processar CSV:", parsed.errors);
      return;
    }

    console.log("✅ CSV lido com sucesso:", parsed.data);

    onDataParsed?.(parsed.data);
  } catch (error) {
    console.error("❌ Erro ao ler arquivo CSV:", error);
  }
};
