import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },

  space: {
    flex: 1,
  },

  content: {
    position: "absolute",
    bottom: 0,

    width: SCREEN_WIDTH,

    backgroundColor: "white",
    shadowOpacity: 0.2,
    elevation: 2, // Android deer shuuder gargana

    borderWidth: Platform.OS === "android" ? 1 : 0,
    borderColor: "darkgray",
    borderBottomWidth: 0,

    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  hideModal: {
    alignSelf: "center",
  },
});
