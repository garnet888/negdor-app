import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  coverBox: {
    position: "relative",

    width: "100%",
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
    gap: Platform.OS === "android" ? 6 : 10,

    marginHorizontal: 10,
    marginVertical: 20,
  },

  iconVw: {
    width: 80,
    height: 80,

    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,

    marginBottom: 2,
  },
  iconTxt: {
    fontSize: 12,
    textAlign: "center",
  },
});
