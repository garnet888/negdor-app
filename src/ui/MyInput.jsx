import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MyInput = (props) => {
  return <TextInput {...props} style={[css.input, props.style]} />;
};

export default MyInput;

const css = StyleSheet.create({
  input: {
    width: "100%",
    minHeight: 40,

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,

    paddingHorizontal: 6,
  },
});
