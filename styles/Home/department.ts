import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 50,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  barBackground: {
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
  },
  barFill: {
    height: 10,
    borderRadius: 8,
  },
  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
});
