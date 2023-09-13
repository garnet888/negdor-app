import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const MySafeArea = ({ children }) => {
  return <SafeAreaView style={styles.css}>{children}</SafeAreaView>;
};

export default MySafeArea;

const styles = StyleSheet.create({
  css: {
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
  },
});
