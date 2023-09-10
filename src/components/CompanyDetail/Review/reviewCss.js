import { StyleSheet } from "react-native";
import { colors } from "../../../lib/constColors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },

  adllReviews: {
    gap: 10,
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
