import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text } from "react-native";

const MyKeyboardAvoiding = ({
  children,
  keyboardVerticalOffset = 0,
  verticalMiddle = false,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={
          verticalMiddle && { flex: 1, justifyContent: "center" }
        }
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MyKeyboardAvoiding;
