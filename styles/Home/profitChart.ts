import color from "@/components/color";
import {StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    borderColor:color.border,
    marginBottom:40,
    borderWidth:1,
    width:"100%",
    padding:16,
    borderRadius:10,
    shadowColor:color.black,
    shadowOffset:{ width:0, height:10},
    shadowOpacity:0.25,
    shadowRadius:2,
    elevation:8,
    backgroundColor:color.background,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: color.text,
    marginBottom: 10,
  },
  chartContent:{
    marginTop:20,
    overflow:"hidden"

  },
  chart: {
    borderRadius: 8,
  },
});

export default style;