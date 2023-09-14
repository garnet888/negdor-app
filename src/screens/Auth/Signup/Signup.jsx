import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyLink from "../../../ui/MyLink";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import AuthCover from "../../../components/AuthCover/AuthCover";

import signupCss from "./signupCss";

const Signup = () => {
  const goto = useNavigation();

  return (
    <MyKeyboardAvoiding>
      <AuthCover title="Бүртгүүлэх" />

      <View style={signupCss.form}>
        <MyInput placeholder="Хэрэглэгчийн нэр" />
        <MyInput placeholder="Овог" />
        <MyInput placeholder="Нэр" />
        <MyInput placeholder="Утасны дугаар" />
        <MyInput placeholder="И-мэйл хаяг" />
        <MyInput placeholder="Нууц үг" secureTextEntry />
        <MyInput placeholder="Нууц үг давтах" secureTextEntry />

        <MyButton
          title="Бүртгүүлэх"
          buttonCss={signupCss.signupBtn}
          onPress={() => goto.goBack()}
        />

        <MyLink
          title="Нэвтрэх"
          onPress={() => goto.goBack()}
          containerCss={signupCss.loginBtn}
        />
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Signup;
