import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ value, onChangeText, mainCss, inputCss }) => {
  return (
    <View style={[styles.container, mainCss]}>
      <MaterialIcons name="search" size={24} color="black" />

      <TextInput
        style={[styles.input, inputCss]}
        placeholder="Хайх..."
        value={value}
        onChangeText={onChangeText}
      />
      {value && (
        <TouchableOpacity
          style={styles.clearText}
          onPress={() => onChangeText("")}
        >
          <EvilIcons name="close-o" size={24} color="gray" />
        </TouchableOpacity>
      )}

      <TouchableOpacity>
        <MaterialIcons name="filter-list" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",
    borderRadius: 6,

    paddingHorizontal: 6,
  },

  input: {
    flex: 1,
    height: 34,

    fontSize: 16,
    marginLeft: 2,
  },
  clearText: {
    marginRight: 4,
  },
});
