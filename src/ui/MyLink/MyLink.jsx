import React from "react";
import { Text, TouchableOpacity } from "react-native";

import myLinkCss from "./myLinkCss";

const MyLink = ({ text, onPress, css }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[{ ...myLinkCss.text, ...css }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MyLink;
