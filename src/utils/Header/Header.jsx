import React from "react";
import { View, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../lib/screens";
import Search from "../../ui/Search";

import headerCss from "./headerCss";

const Header = ({ navigation, showSearch = false }) => {
  return (
    <SafeAreaView>
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

        <TouchableOpacity
          onPress={() => gotoScreen({ navigation, screen: screens.loginScn })}
        >
          <FontAwesome name="sign-in" size={22} style={headerCss.loginIcn} />

          {/* <FontAwesome name="user-circle-o" size={28} color="white" /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
