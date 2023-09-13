import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginBottom: -20,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imageBox: {
    width: 60,
    height: 60,

    borderRadius: 60,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
  name: {
    fontSize: 21,
    fontWeight: "600",
  },

  bio: {
    fontWeight: "600",
    marginLeft: 78,
  },

  marks: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 20,
  },
  marksTxtBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  marksTxt: {
    fontWeight: "600",
  },
});
