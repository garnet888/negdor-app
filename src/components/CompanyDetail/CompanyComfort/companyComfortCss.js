import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 20,
  },

  list: {
    gap: 10,
  },
  item: {
    width: 146,

    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
