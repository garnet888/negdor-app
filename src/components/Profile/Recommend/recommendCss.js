import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    gap: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
  },

  logos: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
  },
  logo: {
    width: 60,
    height: 60,
  },
});
