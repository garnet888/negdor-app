import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";

import changePasswordCss from "./changePasswordCss";

const ChangePassword = () => {
  const goto = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={changePasswordCss.form}>
        <MyInput placeholder="Хуучин нууц үг" secureTextEntry />
        <MyInput placeholder="Шинэ нууц үг" secureTextEntry />
        <MyInput placeholder="Шинэ нууц үг давтах" secureTextEntry />

        <MyButton
          title="Солих"
          buttonCss={changePasswordCss.saveBtn}
          onPress={() => goto.navigate(screens.profileScn)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChangePassword;
