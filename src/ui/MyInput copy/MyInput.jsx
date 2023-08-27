import React from "react";
import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import myInputCss from "./myInputCss";

const MyInput = ({ css }) => {
  return (
    <View style={myInputCss.container}>
      <MaterialIcons name="search" size={24} color="black" />

      <TextInput
        style={[{ ...myInputCss.input, ...css }]}
        placeholder="Хайх..."
      />

      <MaterialIcons name="filter-list" size={26} color="black" />
    </View>
  );
};

export default MyInput;
