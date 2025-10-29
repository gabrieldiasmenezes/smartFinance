// src/components/BarChartReceitaDespesa.style.ts
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 10,
    textAlign: "center",
  },
  chart: {
    borderRadius: 16,
    alignSelf: "center",
  },
});
