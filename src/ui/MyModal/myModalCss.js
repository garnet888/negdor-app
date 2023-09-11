import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modal: {
    position: "relative",

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },

  container: {
    position: "absolute",
    bottom: "50%",
    transform: [{ translateY: 50 }],

    width: "80%",
    height: 120,

    justifyContent: "center",
    alignItems: "center",
    gap: 20,

    backgroundColor: "white",
    elevation: 1.8, // Android deer shuuder gargana
    shadowOpacity: 0.28,
    borderRadius: 10,

    marginHorizontal: 20,
  },
  content: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
