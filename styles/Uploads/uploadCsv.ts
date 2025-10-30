import color from "@/components/color"; 
import { StyleSheet } from "react-native"; 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "100%",
    height: "30%",
    paddingVertical: 30,
    borderRadius: 14,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: color.text,
  },
  uploadBox: {
    borderWidth: 1.5,
    height: "80%",
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop:20,
  },
  textMain: {
    fontSize: 14,
    color: color.text,
    marginTop: 12,
    fontWeight: "500",
  },
  textSub: {
    fontSize: 12,
    color: color.gray,
    marginBottom: 16,
  },
  button: {
    backgroundColor: color.green,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
  fileName: {
    marginTop: 12,
    fontSize: 13,
    color: color.darkGreen,
  },
});


export default styles;