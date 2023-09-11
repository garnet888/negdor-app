import React from "react";
import { StyleSheet, TextInput } from "react-native";

const MyTextArea = (props) => {
  return (
    <TextInput
      multiline={true}
      numberOfLines={4}
      {...props}
      style={[css.textArea, props.style]}
    />
  );
};

export default MyTextArea;

const css = StyleSheet.create({
  textArea: {
    width: "100%",
    minHeight: 40,

    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,

    paddingHorizontal: 6,
  },
});
