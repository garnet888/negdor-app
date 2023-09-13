import { StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

export default StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    gap: 10,

    paddingHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  tabItemTxt: {
    fontSize: 12,
    paddingVertical: 12,
  },

  line: {
    width: "100%",
    height: 3,

    backgroundColor: "gray",
    borderRadius: 36,
  },
  activeLine: {
    backgroundColor: colors.primary,
  },

  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
