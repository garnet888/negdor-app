import { StyleSheet } from "react-native";
import { colors } from "../../constants/constColors";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
  },

  photos: {
    position: "relative",

    marginBottom: 40,
  },
  banner: {
    width: "100%",
    height: 132,
  },
  logoBox: {
    position: "absolute",
    bottom: "-50%",
    left: 20,
    transform: [{ translateY: -20 }],

    width: 92,
    height: 92,

    backgroundColor: "white",
    borderRadius: 92,
    padding: 3.6,
  },
  logo: {
    width: "100%",
    height: "100%",

    borderRadius: 92,
  },

  content: {
    gap: 20,

    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "500",
  },

  infos: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: -20,
  },
  openTxt: {
    color: colors.openColor,
    fontWeight: "500",
  },
  closeTxt: {
    color: "red",
    fontWeight: "500",
  },

  socials: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialsItem: {
    fontSize: 28,
    fontWeight: "500",
  },
  socialWeb: {
    width: 40,
    height: 40,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.primary,
    borderRadius: 40,
  },
  socialWeb_text: {
    fontSize: 10,
    fontWeight: "500",

    color: "white",
  },
});
