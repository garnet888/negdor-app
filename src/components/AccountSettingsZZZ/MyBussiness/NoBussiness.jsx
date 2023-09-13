import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyButton from "../../../ui/MyButton";

import noBussinessCss from "./noBussinessCss";

const NoBussiness = () => {
  const goto = useNavigation();

  return (
    <View style={noBussinessCss.container}>
      <Text style={noBussinessCss.text}>
        танд одоогоор бүртгүүлсэн бизнес байхгүй байна
      </Text>

      <MyButton
        title="Нэмэх"
        onPress={() => goto.navigate(screens.bussinessForm)}
      />
    </View>
  );
};

export default NoBussiness;
