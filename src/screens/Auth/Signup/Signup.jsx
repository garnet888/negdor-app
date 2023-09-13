import React from "react";
import { View } from "react-native";
import { screens } from "../../../lib/screens";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyLink from "../../../ui/MyLink";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import AuthCover from "../../../components/AuthCover/AuthCover";

import signupCss from "./signupCss";

const Signup = ({ navigation }) => {
  const title = "Бүртгүүлэх";

  return (
    <MyKeyboardAvoiding>
      <AuthCover title={title} />

      <View style={signupCss.form}>
        <MyInput placeholder="Хэрэглэгчийн нэр" />
        <MyInput placeholder="Овог" />
        <MyInput placeholder="Нэр" />
        <MyInput placeholder="Утасны дугаар" />
        <MyInput placeholder="И-мэйл хаяг" />
        <MyInput placeholder="Нууц үг" secureTextEntry />
        <MyInput placeholder="Нууц үг давтах" secureTextEntry />

        <MyButton
          title={title}
          buttonCss={signupCss.signupBtn}
          onPress={() => null}
        />

        <MyLink
          title="Нэвтрэх"
          onPress={() => navigation.navigate(screens.loginScn)}
          containerCss={signupCss.loginBtn}
        />
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Signup;
