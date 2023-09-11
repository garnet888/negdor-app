import { StyleSheet } from "react-native";
import { colors } from "../../lib/constColors";

export default StyleSheet.create({
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
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",

    marginTop: 28,
    marginBottom: 10,
  },
  line: {
    width: "100%",
    height: 2,

    backgroundColor: colors.gray,
    borderRadius: 60,

    marginTop: 40,
    marginBottom: -20,
  },
});
