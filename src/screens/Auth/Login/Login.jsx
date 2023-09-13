import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { screens } from "../../../lib/screens";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyLink from "../../../ui/MyLink";
import MyModal from "../../../ui/MyModal/MyModal";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import AuthCover from "../../../components/AuthCover/AuthCover";

import loginCss from "./loginCss";

const _facebook = require("../../../../assets/facebook.png");
const _google = require("../../../../assets/google.png");

const Login = ({ navigation }) => {
  const title = "Нэвтрэх";

  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <MyKeyboardAvoiding>
      <MyModal visible={visibleModal} setVisible={setVisibleModal} />

      <AuthCover title={title} />

      <View style={loginCss.socialBox}>
        <MyLink onPress={() => setVisibleModal(true)}>
          <Image style={loginCss.icon} source={_facebook} />
        </MyLink>

        <MyLink onPress={() => setVisibleModal(true)}>
          <Image style={loginCss.icon} source={_google} />
        </MyLink>
      </View>

      <View style={loginCss.orBox}>
        <View style={loginCss.orLine} />
        <Text style={loginCss.orText}>Эсвэл</Text>
      </View>

      <View style={loginCss.form}>
        <MyInput placeholder="И-мэйл хаяг" />
        <MyInput placeholder="Нууц үг" secureTextEntry />

        <MyButton
          title={title}
          buttonCss={loginCss.loginBtn}
          onPress={() => navigation.navigate(screens.profileScn)}
        />

        <View style={loginCss.linkBox}>
          <MyLink
            title="Нууц үгээ мартсан"
            onPress={() => setVisibleModal(true)}
            textCss={loginCss.linkTxt}
          />

          <MyLink
            title="Бүртгүүлэх"
            onPress={() => navigation.navigate(screens.signupScn)}
            textCss={loginCss.linkTxt}
          />
        </View>
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Login;
