import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../lib/constColors";

const MyButton = ({
  title = "",
  onPress,
  outline = false,
  buttonCss,
  titleCss,
}) => {
  return (
    <TouchableOpacity
      style={[css.button, buttonCss, outline && css.outlineBtn]}
      onPress={onPress}
    >
      <Text style={[css.title, titleCss, outline && css.outlineTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const css = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,

    padding: 10,
  },

  title: {
    fontSize: 16,
    textAlign: "center",

    color: "white",
  },

  outlineBtn: {
    backgroundColor: "transparent",

    borderWidth: 2,
    borderColor: colors.primary,
  },
  outlineTitle: {
    color: colors.primary,
  },
});
