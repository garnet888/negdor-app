import { StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

export default StyleSheet.create({
  container: {
    gap: 8,

    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 12,
    overflow: "hidden",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    paddingHorizontal: 10,
    marginTop: 10,
  },

  imageContainer: {
    position: "relative",
    marginBottom: 6,
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
  medal: {
    position: "absolute",
    bottom: -6,
    right: -6,

    backgroundColor: "orange",
    borderRadius: 60,

    padding: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  banner: {
    width: "100%",
    height: 100,
  },

  companyInfo: {
    gap: 4,

    paddingHorizontal: 10,
    marginBottom: 10,
  },
  review: {
    marginTop: 6,
  },
});
