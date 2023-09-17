import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { screens } from "../../../lib/screens";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";

import changePasswordCss from "./changePasswordCss";

const ChangePassword = () => {
  const goto = useNavigation();

  const passwordsSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .required("Хоосон байна!"),
    newPassword: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .required("Хоосон байна!"),
    reNewPassword: Yup.string()
      .min(8, "Хамгийн багадаа 8 тэмдэгт байх ёстой!")
      .oneOf([Yup.ref("newPassword")], "Таарахгүй байна!")
      .required("Хоосон байна!"),
  });

  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        reNewPassword: "",
      }}
      validationSchema={passwordsSchema}
      onSubmit={() => goto.navigate(screens.profileScn)}
    >
      {({
        values,
        errors,
        touched,
        setFieldTouched,
        handleChange,
        handleSubmit,
      }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={changePasswordCss.form}>
            <MyInput
              placeholder="Хуучин нууц үг"
              value={values.oldPassword}
              type="password"
              onChangeText={handleChange("oldPassword")}
              onBlur={() => setFieldTouched("oldPassword")}
              touched={touched.oldPassword}
              error={errors.oldPassword}
            />

            <MyInput
              placeholder="Шинэ нууц үг"
              value={values.newPassword}
              type="password"
              onChangeText={handleChange("newPassword")}
              onBlur={() => setFieldTouched("newPassword")}
              touched={touched.newPassword}
              error={errors.newPassword}
            />

            <MyInput
              placeholder="Шинэ нууц үг давтах"
              value={values.reNewPassword}
              type="password"
              onChangeText={handleChange("reNewPassword")}
              onBlur={() => setFieldTouched("reNewPassword")}
              touched={touched.reNewPassword}
              error={errors.reNewPassword}
            />

            <MyButton
              title="Солих"
              buttonCss={changePasswordCss.saveBtn}
              onPress={handleSubmit}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

export default ChangePassword;
