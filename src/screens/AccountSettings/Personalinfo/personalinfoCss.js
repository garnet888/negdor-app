import { StyleSheet } from "react-native";

export default StyleSheet.create({
  form: {
    gap: 10,
    paddingHorizontal: 20,
  },

  avatarContainer: {
    position: "relative",

    width: 120,
    height: 120,

    alignSelf: "center",

    marginBottom: 20,
  },
  avatarBox: {
    flex: 1,

    borderRadius: 120,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarUpload: {
    position: "absolute",
    bottom: -2,
    right: -2,

    backgroundColor: "rgba(168, 168, 168, 0.6)",
    borderRadius: 24,

    padding: 6,
  },

  saveBtn: {
    marginTop: 10,
  },
});
