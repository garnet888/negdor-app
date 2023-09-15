import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
  },

  list: {
    width: SCREEN_WIDTH / 2 - 28,
    gap: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
