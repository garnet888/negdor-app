import React from "react";
import { View, Text } from "react-native";
import MyLink from "../../ui/MyLink/MyLink";
import { goBack } from "../../lib/gotoFuncs";

import signupCss from "./signupCss";

const Signup = ({ navigation }) => {
  return (
    <View style={signupCss.container}>
      <Text style={signupCss.title}>Бүргүүлэх</Text>

      <MyLink text="< Нэвтрэх >" onPress={() => goBack({ navigation })} />
    </View>
  );
};

export default Signup;
