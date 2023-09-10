import React from "react";
import {
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../lib/screens";

import headerCss from "./headerCss";

const Header = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />

      <View style={headerCss.container}>
        {navigation.canGoBack() ? (
          <TouchableOpacity
            style={headerCss.goBack}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={26} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={headerCss.goBack} />
        )}

        <TouchableOpacity
          onPress={() => gotoScreen({ navigation, screen: screens.loginScn })}
        >
          <FontAwesome
            name="user-o"
            size={Platform.OS === "android" ? 24 : 28}
            color="white"
          />

          {/* <FontAwesome
          name="user-circle-o"
          size={Platform.OS === "android" ? 28 : 32}
          color="white"
        /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
