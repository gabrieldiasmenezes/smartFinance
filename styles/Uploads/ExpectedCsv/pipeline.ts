import color from "@/components/color";
import {StyleSheet } from "react-native";
const style = StyleSheet.create({
  pipeline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
  },
  pipelineContent:{
    justifyContent:"center",
    alignItems:"center"
  },
  stageContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  stageText: {
    fontSize: 12,
    color: color.text,
    marginLeft: 6,
    textAlign: "center",
    flexShrink: 1,
  },
  arrow: {
    marginHorizontal: 8,
  },
});

export default style;