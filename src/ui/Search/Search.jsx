import React from "react";
import { TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import searchCss from "./searchCss";

const Search = ({ mainCss, inputCss }) => {
  return (
    <View style={[{ ...searchCss.container, ...mainCss }]}>
      <MaterialIcons name="search" size={24} color="black" />

      <TextInput
        style={[{ ...searchCss.input, ...inputCss }]}
        placeholder="Хайх..."
      />

      <MaterialIcons name="filter-list" size={26} color="black" />
    </View>
  );
};

export default Search;
