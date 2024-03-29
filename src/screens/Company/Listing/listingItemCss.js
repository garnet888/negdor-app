import { StyleSheet } from "react-native";
import { colors } from "../../../lib/constColors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: "white",
    borderRadius: 8,

    padding: 6,
  },

  logo: {
    width: 120,
    height: 120,

    borderRadius: 8,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },

  types: {
    flexDirection: "row",
    gap: 4,

    marginTop: 6,
    marginBottom: 4,
  },
  types_item: {
    backgroundColor: colors.gray,

    borderRadius: 4,
    overflow: "hidden",

    paddingHorizontal: 6,
  },

  isOpen: {
    flexDirection: "row",
    marginBottom: 2,
  },
  openTxt: {
    color: colors.openColor,
    fontWeight: "500",
  },
  closeTxt: {
    color: "red",
    fontWeight: "500",
  },
});
