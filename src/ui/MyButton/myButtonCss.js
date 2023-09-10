import { StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

export default myButtonCss = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 6,

    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  text: {
    color: "white",
    fontSize: 16,
  },

  outlineBtn: {
    backgroundColor: "transparent",

    borderWidth: 2,
    borderColor: colors.primary,
  },
  outlineTxt: {
    color: colors.primary,
  },
});
