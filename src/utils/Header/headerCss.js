import { StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

export default StyleSheet.create({
  container: {
    height: 60,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: colors.primary,
    paddingHorizontal: 10,
  },

  goBackSpace: {
    width: 18,
    height: 24,
  },

  searchBox: {
    width: "74%",
  },

  loginIcn: {
    backgroundColor: "white",
    color: colors.blue,

    borderRadius: 10,
    overflow: "hidden",

    paddingHorizontal: 6,
    paddingVertical: 4.8,
  },
});
