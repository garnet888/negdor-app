import React from "react";
import { Text, TouchableOpacity } from "react-native";

import myButtonCss from "./myButtonCss";

const MyButton = ({
  text = "",
  onPress,
  outline = false,
  buttonCss,
  textCss,
}) => {
  return (
    <TouchableOpacity
      style={[
        { ...myButtonCss.container, ...buttonCss },
        outline && { ...myButtonCss.outlineBtn },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          { ...myButtonCss.text, ...textCss },
          outline && { ...myButtonCss.outlineTxt },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
