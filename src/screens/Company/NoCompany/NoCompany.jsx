import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyButton from "../../../ui/MyButton";

import noCompanyCss from "./noCompanyCss";

const NoCompany = () => {
  const goto = useNavigation();

  return (
    <View style={noCompanyCss.container}>
      <Text style={noCompanyCss.text}>
        танд одоогоор бүртгүүлсэн байгууллага байхгүй байна
      </Text>

      <MyButton
        title="Бүртгүүлэх"
        onPress={() => goto.navigate(screens.companyFormScn, { type: "add" })}
      />
    </View>
  );
};

export default NoCompany;
