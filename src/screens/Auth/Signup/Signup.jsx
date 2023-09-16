import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyLink from "../../../ui/MyLink";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import AuthCover from "../../../components/AuthCover/AuthCover";

import signupCss from "./signupCss";

const Signup = () => {
  const goto = useNavigation();

  const signupSchema = Yup.object().shape({
    username: Yup.string().required("Хоосон байна!"),
    firstname: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "Зөвхөн үсэг бичнэ үү!")
      .matches(/^[A-Z][a-z0-9_-]*$/, "Эхний үсэг том байх ёстой!")
      .required("Хоосон байна!"),
    lastname: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "Зөвхөн үсэг бичнэ үү!")
      .matches(/^[A-Z][a-z0-9_-]*$/, "Эхний үсэг том байх ёстой!")
      .required("Хоосон байна!"),
    phonenumber: Yup.string()
      .matches(/^[0-9]*$/, "Зөвхөн тоо бичнэ үү!")
      .min(8, "Урт багадаа 8 байх ёстой!")
      .required("Хоосон байна!"),
    email: Yup.string()
      .email("Зөв форматаар бичнэ үү!")
      .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Зөв форматаар бичнэ үү!")
      .required("Хоосон байна!"),
    password: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .required("Хоосон байна!"),
    repassword: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .oneOf([Yup.ref("password")], "Таарахгүй байна!")
      .required("Хоосон байна!"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        password: "",
        repassword: "",
      }}
      validationSchema={signupSchema}
      onSubmit={() => goto.goBack()}
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
          <AuthCover title="Бүртгүүлэх" />

          <View style={signupCss.form}>
            <MyInput
              placeholder="Хэрэглэгчийн нэр"
              value={values.username}
              onChangeText={handleChange("username")}
              onBlur={() => setFieldTouched("username")}
            />
            {touched.username && errors.username && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.username}
              </Text>
            )}

            <MyInput
              placeholder="Овог"
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              onBlur={() => setFieldTouched("lastname")}
            />
            {touched.lastname && errors.lastname && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.lastname}
              </Text>
            )}

            <MyInput
              placeholder="Нэр"
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              onBlur={() => setFieldTouched("firstname")}
            />
            {touched.firstname && errors.firstname && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.firstname}
              </Text>
            )}

            <MyInput
              placeholder="Утасны дугаар"
              value={values.phonenumber}
              keyboardType="number-pad"
              maxLength={8}
              onChangeText={handleChange("phonenumber")}
              onBlur={() => setFieldTouched("phonenumber")}
            />
            {touched.phonenumber && errors.phonenumber && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.phonenumber}
              </Text>
            )}

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

            <MyInput
              placeholder="Нууц үг давтах"
              value={values.repassword}
              secureTextEntry
              onChangeText={handleChange("repassword")}
              onBlur={() => setFieldTouched("repassword")}
            />
            {touched.repassword && errors.repassword && (
              <Text style={{ color: "red", marginTop: -10 }}>
                {errors.repassword}
              </Text>
            )}

            <MyButton
              title="Бүртгүүлэх"
              buttonCss={signupCss.signupBtn}
              onPress={handleSubmit}
            />

            <MyLink
              title="Нэвтрэх"
              onPress={() => goto.goBack()}
              containerCss={signupCss.loginBtn}
            />
          </View>
        </MyKeyboardAvoiding>
      )}
    </Formik>
  );
};

export default Signup;
