import { Dimensions, Platform, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default StyleSheet.create({
  coverBox: {
    position: "relative",

    width: SCREEN_WIDTH,
    height: "50%",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  searchBox: {
    position: "absolute",
    bottom: 12,

    width: "100%",
    paddingHorizontal: 12,
  },

  content: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: Platform.OS === "android" ? 6 : 10,
    rowGap: 10,

    marginHorizontal: 10,
    marginVertical: 20,
  },

  iconBox: {
    width: 80,
    height: 80,

    justifyContent: "center",
    alignItems: "center",
    gap: 2,

    backgroundColor: "darkgray",
    borderRadius: 12,
  },
  icon: {
    width: 40,
    height: 40,

    marginBottom: 2,
  },
  iconTxt: {
    fontSize: 12,
    textAlign: "center",

    color: "white",
  },
});
