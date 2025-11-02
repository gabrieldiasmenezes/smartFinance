// src/hooks/useTrimestres.ts
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export interface Trimestre {
  trimestre: string;
  receita: number;
  despesa: number;
  lucro: number;
  setores: {
    engenharia: number;
    produtos: number;
    vendas: number;
    suporte_e_cs: number;
    rh_e_talentos: number;
    financeiro: number;
    operacoes_gerais: number;
  };
  // aceita campos extras
  [key: string]: any;
}

// Helper: converte strings tipo "1.234.567" ou "1.234,56" em number
const parseNumberString = (value: any): number | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return value;

  let s = String(value).trim();
  if (s === "") return null;

  // remove espaços
  s = s.replace(/\s+/g, "");

  // formato brasileiro com decimais: 1.234.567,89 -> 1234567.89
  if (/^\d{1,3}(\.\d{3})*,\d+$/.test(s)) {
    s = s.replace(/\./g, "").replace(",", ".");
  }
  // formato americano com decimais: 1,234,567.89 -> 1234567.89
  else if (/^\d{1,3}(,\d{3})*\.\d+$/.test(s)) {
    s = s.replace(/,/g, "");
  }
  // apenas milhar com pontos ou vírgulas: 20.000.000 ou 20,000,000 -> 20000000
  else if (/^\d{1,3}([.,]\d{3})+$/.test(s)) {
    s = s.replace(/[.,]/g, "");
  } else {
    // remove quaisquer vírgulas isoladas (por segurança)
    s = s.replace(/,/g, "");
  }

  const n = Number(s);
  return isNaN(n) ? null : n;
};

const normalizeTrimestre = (raw: any): Trimestre => {
  const t: any = {};

  t.trimestre = raw.trimestre ?? raw.TRIMESTRE ?? raw.Trimestre ?? "";

  // Campos topo-level
  t.receita = parseNumberString(raw.receita ?? raw.Receita ?? raw.RECEITA) ?? 0;
  t.despesa = parseNumberString(raw.despesa ?? raw.DESPESA ?? raw.Despesa) ?? 0;
  t.lucro = parseNumberString(raw.lucro ?? raw.LUCRO ?? raw.Lucro) ?? 0;

  // Setores (prevenção caso faltem)
  const setoresRaw = raw.setores ?? raw.setor ?? {};
  t.setores = {
    engenharia: parseNumberString(setoresRaw.engenharia ?? setoresRaw.Engenharia ?? setoresRaw["ENGENHARIA"]) ?? 0,
    produtos: parseNumberString(setoresRaw.produtos ?? setoresRaw.Produtos ?? setoresRaw["PRODUTOS"]) ?? 0,
    vendas: parseNumberString(setoresRaw.vendas ?? setoresRaw.Vendas ?? setoresRaw["VENDAS"]) ?? 0,
    suporte_e_cs: parseNumberString(setoresRaw.suporte_e_cs ?? setoresRaw["SUPORTE E CS"] ?? setoresRaw["SUPORTE & CS"]) ?? 0,
    rh_e_talentos: parseNumberString(setoresRaw.rh_e_talentos ?? setoresRaw["RH E TALENTOS"] ?? setoresRaw["RH & TALENTOS"]) ?? 0,
    financeiro: parseNumberString(setoresRaw.financeiro ?? setoresRaw.Financeiro ?? setoresRaw["FINANCEIRO"]) ?? 0,
    operacoes_gerais:
      parseNumberString(setoresRaw.operacoes_gerais ?? setoresRaw["OPERACOES GERAIS"] ?? setoresRaw["OPERAÇÕES GERAIS"]) ?? 0,
  };

  // inclui quaisquer campos extras sem alteração (caso precise)
  Object.keys(raw).forEach((k) => {
    if (!(k in t)) t[k] = raw[k];
  });

  return t as Trimestre;
};

export default function useTrimestres() {
  const [trimestres, setTrimestres] = useState<Trimestre[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrimestres = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "trimestres"));
      const data = snapshot.docs.map((doc) => {
        const raw = doc.data();
        return normalizeTrimestre(raw);
      });
      // opcional: ordenar por trimestre (Q1,Q2... — supõe formato Q1..Q4)
      data.sort((a: any, b: any) => {
        const idx = (q: string) => {
          if (!q) return 0;
          const m = q.match(/Q(\d)/i);
          return m ? Number(m[1]) : 0;
        };
        return idx(a.trimestre) - idx(b.trimestre);
      });
      setTrimestres(data);
    } catch (err) {
      console.error("Erro ao buscar trimestres:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrimestres();
  }, []);

  return { trimestres, loading, refresh: fetchTrimestres };
}
