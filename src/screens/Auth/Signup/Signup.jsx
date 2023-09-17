import React from "react";
import { View } from "react-native";
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
              touched={touched.username}
              error={errors.username}
            />

            <MyInput
              placeholder="Овог"
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              onBlur={() => setFieldTouched("lastname")}
              touched={touched.lastname}
              error={errors.lastname}
            />

            <MyInput
              placeholder="Нэр"
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              onBlur={() => setFieldTouched("firstname")}
              touched={touched.firstname}
              error={errors.firstname}
            />

            <MyInput
              placeholder="Утасны дугаар"
              value={values.phonenumber}
              type="number-pad"
              maxLength={8}
              onChangeText={handleChange("phonenumber")}
              onBlur={() => setFieldTouched("phonenumber")}
              touched={touched.phonenumber}
              error={errors.phonenumber}
            />

            <MyInput
              placeholder="И-мэйл хаяг"
              value={values.email}
              type="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              touched={touched.email}
              error={errors.email}
            />

            <MyInput
              placeholder="Нууц үг"
              value={values.password}
              type="password"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              touched={touched.password}
              error={errors.password}
            />

            <MyInput
              placeholder="Нууц үг давтах"
              value={values.repassword}
              type="password"
              onChangeText={handleChange("repassword")}
              onBlur={() => setFieldTouched("repassword")}
              touched={touched.repassword}
              error={errors.repassword}
            />

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
