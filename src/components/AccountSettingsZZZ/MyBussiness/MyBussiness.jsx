import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyButton from "../../../ui/MyButton";
import NoBussiness from "./NoBussiness";

import myBussinessCss from "./myBussinessCss";

const MyBussiness = () => {
  const goto = useNavigation();

  const noBussiness = false;

  return noBussiness ? (
    <NoBussiness />
  ) : (
    <View style={myBussinessCss.container}>
      <Text>My Bussiness</Text>

      <MyButton
        title="Засах"
        onPress={() => goto.navigate(screens.bussinessForm)}
      />
    </View>
  );
};

export default MyBussiness;
