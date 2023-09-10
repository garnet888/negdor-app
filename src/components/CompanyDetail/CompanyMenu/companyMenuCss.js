import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  list: {
    height: 168,
    borderRadius: 8,
  },

  photoContainer: {
    position: "relative",

    width: screenWidth - 100,
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
