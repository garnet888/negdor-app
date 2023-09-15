import { StyleSheet } from "react-native";
import { colors } from "../../../lib/constColors";

export default StyleSheet.create({
  bannerBox: {
    position: "relative",

    width: "100%",
    height: 140,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  noBannerBox: {
    backgroundColor: colors.grayWhite,
    padding: 14,
  },
  noBanner: {
    objectFit: "contain",
  },
  uploadBanner: {
    position: "absolute",
    bottom: 10,
    right: 10,

    backgroundColor: "darkgray",
    borderRadius: 6,

    padding: 6,
  },

  logoContainer: {
    position: "relative",

    width: 92,
    height: 92,

    alignSelf: "center",

    marginTop: 20,
    marginBottom: 30,
  },
  logoBox: {
    flex: 1,

    borderRadius: 92,
    overflow: "hidden",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logoUpload: {
    position: "absolute",
    bottom: -4,
    right: -4,

    backgroundColor: "darkgray",
    borderRadius: 24,

    padding: 6,
  },

  form: {
    gap: 10,
    paddingHorizontal: 20,
  },

  saveBtn: {
    marginVertical: 10,
  },
});
