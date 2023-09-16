import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { screens } from "../../../lib/screens";
import { getAuthContext } from "../../../context/AuthContext";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyLink from "../../../ui/MyLink";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import AuthCover from "../../../components/AuthCover/AuthCover";

import loginCss from "./loginCss";

const _facebook = require("../../../../assets/facebook.png");
const _google = require("../../../../assets/google.png");

const Login = ({ navigation }) => {
  const { isLoading, loginHandler } = getAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MyKeyboardAvoiding>
      <AuthCover title="Нэвтрэх" />

      <View style={loginCss.socialBox}>
        <MyLink onPress={() => null}>
          <Image style={loginCss.icon} source={_facebook} />
        </MyLink>

        <MyLink onPress={() => null}>
          <Image style={loginCss.icon} source={_google} />
        </MyLink>
      </View>

      <View style={loginCss.orBox}>
        <View style={loginCss.orLine} />
        <Text style={loginCss.orText}>Эсвэл</Text>
      </View>

      <View style={loginCss.form}>
        <MyInput
          placeholder="И-мэйл хаяг"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <MyInput
          placeholder="Нууц үг"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        {isLoading ? (
          <ActivityIndicator style={loginCss.loginBtn} />
        ) : (
          <MyButton
            title="Нэвтрэх"
            buttonCss={loginCss.loginBtn}
            onPress={() => loginHandler({ email, password })}
          />
        )}

        <View style={loginCss.linkBox}>
          <MyLink
            title="Нууц үгээ мартсан"
            onPress={() => null}
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
