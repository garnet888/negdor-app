import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../lib/constColors";

const MyLink = ({ title = "", children, onPress, containerCss, textCss }) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerCss}>
      {children ? (
        children
      ) : (
        <Text style={[styles.title, textCss]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MyLink;

const styles = StyleSheet.create({
  title: {
    color: colors.blue,
    fontSize: 18,
  },
});
