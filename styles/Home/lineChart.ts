import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 

const style = StyleSheet.create({
  container: {
    borderColor: color.border,
    marginBottom: 40,
    borderWidth: 1,
    width: "100%",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    backgroundColor: color.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: color.text,
    marginBottom: 12,
  },
  chart: {
    borderRadius: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
});

export default style;