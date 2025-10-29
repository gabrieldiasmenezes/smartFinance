import { StyleSheet } from "react-native";
import color from "@/components/color";

const style = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    left: 25,
    right: 25,
    height: 75,
    marginVertical:30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: color.green,
    borderRadius: 40,
    shadowColor: color.black,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 10,
    paddingHorizontal: 10,
  },

  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginBottom: 4,
  },

  focusedCircle: {
    backgroundColor: color.darkGreen,
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default style;
