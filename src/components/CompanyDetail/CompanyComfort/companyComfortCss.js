import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
  },

  list: {
    width: windowWidth / 2 - 28,
    gap: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
