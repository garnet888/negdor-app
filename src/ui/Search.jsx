import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Search = ({ mainCss, inputCss }) => {
  return (
    <View style={[css.container, mainCss]}>
      <MaterialIcons name="search" size={24} color="black" />

      <TextInput style={[css.input, inputCss]} placeholder="Хайх..." />

      <MaterialIcons name="filter-list" size={26} color="black" />
    </View>
  );
};

export default Search;

const css = StyleSheet.create({
  container: {
    height: 34,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",
    borderRadius: 6,

    paddingHorizontal: 6,
  },

  input: {
    flex: 1,
    height: "100%",
    

    fontSize: 16,

    paddingHorizontal: 6,
    paddingVertical: 4,

    marginRight: 6,
  },
});
