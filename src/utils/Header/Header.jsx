import React from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MySafeArea from "../../ui/MySafeArea";
import Search from "../../ui/Search";

import headerCss from "./headerCss";

const Header = ({ navigation, showSearch = false }) => {
  return (
    <MySafeArea>
      <StatusBar />

      <View style={headerCss.container}>
        {navigation.canGoBack() ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={headerCss.goBackSpace} />
        )}

        {showSearch && (
          <View style={headerCss.searchBox}>
            <Search />
          </View>
        )}
      </View>
    </MySafeArea>
  );
};

export default Header;
