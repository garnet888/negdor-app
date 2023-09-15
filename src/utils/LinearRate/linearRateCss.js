import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const fullWidth = SCREEN_WIDTH - 80;
const perWidth = fullWidth / 5;

export default StyleSheet.create({
  container: {
    gap: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },

  starCount: {
    width: 30,
  },
  border: {
    width: fullWidth,
    height: 20,

    backgroundColor: colors.gray,
    borderRadius: 12,
  },
  line: {
    width: fullWidth - perWidth * 4,
    height: 20,

    backgroundColor: colors.primary,
    borderRadius: 12,
  },
  four: {
    width: fullWidth - perWidth,
  },
});
