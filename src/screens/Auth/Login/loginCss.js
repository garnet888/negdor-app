import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  socialBox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,

    marginTop: 60,
    marginBottom: 20,
  },
  icon: {
    width: Platform.OS === "ios" ? 46 : 42,
    height: Platform.OS === "ios" ? 46 : 42,
  },

  orBox: {
    position: "relative",
  },
  orText: {
    width: 46,
    alignSelf: "center",

    backgroundColor: "white",
    color: "gray",

    fontSize: 12,
    textAlign: "center",
  },
  orLine: {
    position: "absolute",
    top: "50%",

    alignSelf: "center",
    width: "90%",
    height: 1,

    backgroundColor: "gray",
  },

  form: {
    gap: 10,

    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginBtn: {
    marginTop: 10,
  },
  linkBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkTxt: {
    fontSize: Platform.OS === "ios" ? 16.4 : 14.8,
    marginTop: Platform.OS === "ios" ? 6 : 0,
  },
  gotoHome: {
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 20 : 10,
  },
});
