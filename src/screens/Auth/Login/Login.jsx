import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
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

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Зөв форматаар бичнэ үү!")
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Зөв форматаар бичнэ үү!")
      .required("Хоосон байна!"),
    password: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .required("Хоосон байна!"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values) => loginHandler(({ email, password } = values))}
    >
      {({
        values,
        errors,
        touched,
        setFieldTouched,
        handleChange,
        handleSubmit,
      }) => (
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
              value={values.email}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && errors.email && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.email}
              </Text>
            )}
            <MyInput
              placeholder="Нууц үг"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            {touched.password && errors.password && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.password}
              </Text>
            )}

            {isLoading ? (
              <ActivityIndicator style={loginCss.loginBtn} />
            ) : (
              <MyButton
                title="Нэвтрэх"
                buttonCss={loginCss.loginBtn}
                onPress={handleSubmit}
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
      )}
    </Formik>
  );
};

export default Login;
