import { StyleSheet } from "react-native";
import { colors } from "../../../lib/constColors";

export default StyleSheet.create({
  container: {
    gap: 10,
  },

  name: {
    fontSize: 26,
    fontWeight: "500",
  },

  infos: {
    flexDirection: "row",
    alignItems: "center",
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

  icon: {
    width: 40,
    height: 40,
  },
  web: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.primary,
    borderRadius: 40,
  },
  web_text: {
    fontSize: 10,
    fontWeight: "500",

    color: "white",
  },
});
