import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  list: {
    height: 168,
    borderRadius: 8,
  },

  photoContainer: {
    position: "relative",

    width: SCREEN_WIDTH - 100,
    height: "100%",

    borderRadius: 8,
    overflow: "hidden",

    marginRight: 16,
  },
  photoTxt: {
    position: "absolute",
    zIndex: 1,

    width: "100%",

    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    fontSize: 18,
    fontWeight: "500",

    padding: 6,
  },

  name: {
    top: 0,
  },
  photo: {
    width: "100%",
    height: "100%",
  },
  price: {
    bottom: 0,
    textAlign: "right",
  },
});
