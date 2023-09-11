import { StyleSheet } from "react-native";

export default StyleSheet.create({
  starRate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,
  },
  countContainer: {
    width: 90,
    height: 70,

    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 34,
    fontWeight: "500",
  },
  total: {
    fontSize: 12,
  },
});
