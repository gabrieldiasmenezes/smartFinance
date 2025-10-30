import color from "@/components/color";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 8,
    marginBottom: 10,
    backgroundColor: color.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerRow: {
    backgroundColor: color.green + "20",
  },
  altRow: {
    backgroundColor: color.gray + "08",
  },

  cell: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 13,
    color: color.text,
    borderRightWidth: 1,
    borderColor: color.border,
  },

  // colunas equilibradas
  triCell: {
    flex: 1.6,
    textAlign: "left",
  },
  numCell: {
    flex: 1,
    textAlign: "right",
    paddingRight: 10,
  },
  lastCell: {
    flex: 1.1,
    textAlign: "right",
    paddingRight: 12,
    borderRightWidth: 0,
  },

  headerCell: {
    fontWeight: "700",
    color: color.darkGreen,
  },

  receita: {
    color: color.green,
    fontWeight: "600",
  },
  despesa: {
    color: color.red,
    fontWeight: "500",
  },
  lucro: {
    color: color.green,
    fontWeight: "600",
  },
});

export default style;
