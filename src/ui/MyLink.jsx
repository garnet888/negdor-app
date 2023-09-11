import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../lib/constColors";

const MyLink = ({ title = "", children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {children ? children : <Text style={[css.title, style]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default MyLink;

const css = StyleSheet.create({
  title: {
    color: colors.blue,
    fontSize: 18,
  },
});
