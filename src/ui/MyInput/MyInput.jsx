import React from "react";
import { TextInput } from "react-native";

import myInputCss from "./myInputCss";

const MyInput = ({ placeholder = "", multiline, css }) => {
  return (
    <TextInput
      placeholder={placeholder}
      multiline={multiline}
      style={[{ ...myInputCss.input, ...css }]}
    />
  );
};

export default MyInput;
