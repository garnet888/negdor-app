import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    position: "relative",

    width: SCREEN_WIDTH,
    height: 200,
  },

  coverBck: {
    flex: 1,
    backgroundColor: "black",
  },
  cover: {
    opacity: 0.6,
  },

  textBox: {
    position: "absolute",
    bottom: 0,

    width: "100%",
  },
  title: {
    fontSize: 42,
    fontWeight: "500",

    textAlign: "center",
    color: "white",
  },
  text: {
    fontSize: 16,

    textAlign: "center",
    color: "white",

    marginVertical: 10,
  },
});
