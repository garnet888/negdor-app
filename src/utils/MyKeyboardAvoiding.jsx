import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const MyKeyboardAvoiding = ({ children, keyboardVerticalOffset = 80 }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MyKeyboardAvoiding;
