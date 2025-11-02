import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import Papa from "papaparse";

// Função auxiliar: converte strings com ponto/vírgula em número
const parseNumberString = (value: any): number | string => {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return value;

  let s = String(value).trim();
  if (s === "") return "";

  // Remove espaços e aspas
  s = s.replace(/\s+/g, "").replace(/"/g, "");

  // Caso: 1.234.567,89 → 1234567.89
  if (/^\d{1,3}(\.\d{3})*,\d+$/.test(s)) {
    s = s.replace(/\./g, "").replace(",", ".");
  }
  // Caso: 1,234,567.89 → 1234567.89
  else if (/^\d{1,3}(,\d{3})*\.\d+$/.test(s)) {
    s = s.replace(/,/g, "");
  }
  // Caso: 725.000.000 → 725000000
  else if (/^\d{1,3}([.,]\d{3})+$/.test(s)) {
    s = s.replace(/[.,]/g, "");
  } else {
    // Remove qualquer vírgula solta
    s = s.replace(/,/g, "");
  }

  const n = Number(s);
  return isNaN(n) ? value : n;
};

export const handlePickFile = async (
  setFileName: (name: string | null) => void,
  onDataParsed?: (data: any[]) => void
) => {
  try {
    const result: any = await DocumentPicker.getDocumentAsync({
      type: "text/csv",
      copyToCacheDirectory: true,
    });

    if (result.type === "cancel") return;

    const { name, uri } = result;
    setFileName(name);

    let fileContent = await FileSystem.readAsStringAsync(uri, { encoding: "utf8" });
    fileContent = fileContent.replace(/^\uFEFF/, ""); // Remove BOM

    const lines = fileContent.split(/\r?\n/).map((l) => l.replace(/\u00A0/g, "").trim());
    const headerIndex = lines.findIndex((l) => l.toUpperCase().includes("TRIMESTRE"));
    if (headerIndex === -1) {
      console.error("Cabeçalho TRIMESTRE não encontrado.");
      return;
    }

    const delimiter = lines[headerIndex].includes(";") ? ";" : ",";
    const cleanedContent = lines.slice(headerIndex).join("\n");

    const parsed = Papa.parse(cleanedContent, {
      header: true,
      skipEmptyLines: true,
      delimiter,
    });

    if (parsed.errors.length > 0) {
      console.error("Erros no CSV:", parsed.errors);
      return;
    }

    // Normaliza e converte números corretamente
    const normalizedData = parsed.data
      .map((item: any) => {
        const obj: Record<string, any> = {};
        Object.keys(item).forEach((keyRaw) => {
          const key = (keyRaw || "").trim();
          if (!key) return;

          let value = item[keyRaw] ?? "";
          value = value.toString().trim();

          // Converte valores numéricos com separadores
          const numericValue = parseNumberString(value);
          obj[key] = numericValue;
        });
        return obj;
      })
      .filter(
        (row) =>
          Object.keys(row).length > 0 &&
          Object.values(row).some((v) => v !== "" && v !== null && v !== undefined)
      );

    console.log("✅ CSV processado:", normalizedData);
    onDataParsed?.(normalizedData);
  } catch (error) {
    console.error("Erro ao ler CSV:", error);
  }
};
