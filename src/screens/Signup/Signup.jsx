import React from "react";
import { View } from "react-native";
import { screens } from "../../lib/screens";
import { gotoScreen } from "../../lib/gotoFuncs";
import MyInput from "../../ui/MyInput";
import MyButton from "../../ui/MyButton";
import MyLink from "../../ui/MyLink";
import MyKeyboardAvoiding from "../../utils/MyKeyboardAvoiding";
import AuthCover from "../../components/AuthCover/AuthCover";

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
        <MyInput placeholder="Нууц үг" />
        <MyInput placeholder="Нууц үг давтах" />

        <MyButton
          title={title}
          buttonCss={signupCss.signupBtn}
          onPress={() => null}
        />

        <View style={signupCss.linkBox}>
          <MyLink
            title="Нүүр"
            onPress={() => gotoScreen({ navigation, screen: screens.homeScn })}
          />

          <MyLink
            title="Нэвтрэх"
            onPress={() => gotoScreen({ navigation, screen: screens.loginScn })}
          />
        </View>
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Signup;
