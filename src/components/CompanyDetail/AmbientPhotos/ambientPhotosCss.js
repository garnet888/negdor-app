import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  list: {
    height: 168,
    borderRadius: 8,
  },

  photo: {
    width: windowWidth - 100,
    height: "100%",

    borderRadius: 8,
    marginRight: 16,
  },
});
