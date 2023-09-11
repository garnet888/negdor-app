import { StyleSheet } from "react-native";
import { colors } from "../../../lib/constColors";

export default StyleSheet.create({
  container: {
    gap: 10,
  },

  allReviews: {
    gap: 10,
    marginTop: 16,
  },

  review: {
    backgroundColor: colors.gray,
    borderRadius: 8,

    padding: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    marginBottom: 10,
  },
  name: {
    fontSize: 16,
  },
});
