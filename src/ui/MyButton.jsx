import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../lib/constColors";

const MyButton = ({
  title = "",
  disabled = false,
  onPress,
  outline = false,
  buttonCss,
  titleCss,
}) => {
  return (
    <TouchableOpacity
      style={[
        css.button,
        disabled && css.disabledBtn,
        buttonCss,
        outline && css.outlineBtn,
      ]}
      disabled={disabled}
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
  disabledBtn: {
    opacity: 0.48,
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
