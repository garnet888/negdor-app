import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  list: {
    height: 168,
    borderRadius: 8,
  },

  photo: {
    width: SCREEN_WIDTH - 100,
    height: "100%",

    borderRadius: 8,
    marginRight: 16,
  },
});
