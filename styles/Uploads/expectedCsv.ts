import color from "@/components/color";
import {StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    borderColor: color.green,
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 18,
    marginVertical: 16,
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 10,
    color: color.text,
  },
  text: {
    fontSize: 13,
    fontWeight: "400",
    padding: 7,
    color: color.text,
    lineHeight: 18,
  },
  bold: {
    fontWeight: "600",
    color: color.darkGreen,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 14,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: color.border,
    gap: 8,
  },
  footerIcon: {
    marginTop: 2,
  },
  footerText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
    color: color.gray,
  },
});



export default style;