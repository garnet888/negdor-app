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

  goBack: {
    width: 24,
    height: 24,
  },
});
