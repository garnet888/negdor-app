import { StyleSheet } from "react-native";
import { colors } from "../../constants/constColors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  star: {
    color: "white",
    borderRadius: 6,

    padding: 2,
  },
  starFill: {
    backgroundColor: colors.starColor,
  },
  starNone: {
    backgroundColor: colors.gray,
  },
});
