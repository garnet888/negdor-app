import React, { useState } from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Entypo } from "@expo/vector-icons";
import { screens } from "../../../lib/screens";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import UploadPhoto from "../../../utils/UploadPhoto/UploadPhoto";

import personalinfoCss from "./personalinfoCss";

const _noIMG = require("../../../../assets/no-image.png");

const Personalinfo = () => {
  const goto = useNavigation();

  const [avatar, setAvatar] = useState("");
  const [showUploadAvatar, setShowUploadAvatar] = useState(false);
  const [keyboardShown, setKeyboardShown] = useState(false);

  const infosSchema = Yup.object().shape({
    username: Yup.string().required("Хоосон байна!"),
    firstname: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "Зөвхөн үсэг бичнэ үү!")
      .matches(/^[A-Z][a-z0-9_-]*$/, "Эхний үсэг том байх ёстой!")
      .required("Хоосон байна!"),
    lastname: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "Зөвхөн үсэг бичнэ үү!")
      .matches(/^[A-Z][a-z0-9_-]*$/, "Эхний үсэг том байх ёстой!")
      .required("Хоосон байна!"),
  });

  return (
    <Formik
      initialValues={{ username: "", firstname: "", lastname: "" }}
      validationSchema={infosSchema}
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
        <MyKeyboardAvoiding
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 140}
          verticalMiddle={keyboardShown ? false : true}
        >
          <View style={personalinfoCss.form}>
            <View style={personalinfoCss.avatarContainer}>
              <View style={personalinfoCss.avatarBox}>
                <Image
                  style={personalinfoCss.avatar}
                  source={avatar ? { uri: avatar } : _noIMG}
                />
              </View>

              <TouchableOpacity
                style={personalinfoCss.avatarUpload}
                onPress={() => setShowUploadAvatar(true)}
              >
                <Entypo name="camera" size={24} color="white" />
              </TouchableOpacity>
              <UploadPhoto
                visible={showUploadAvatar}
                onCancel={() => setShowUploadAvatar(false)}
                setPhoto={setAvatar}
              />
            </View>

            <MyInput
              placeholder="Хэрэглэгчийн нэр"
              value={values.username}
              onChangeText={handleChange("username")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("username");
              }}
              touched={touched.username}
              error={errors.username}
            />

            <MyInput
              placeholder="Овог"
              value={values.lastname}
              onChangeText={handleChange("lastname")}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("lastname");
              }}
              touched={touched.lastname}
              error={errors.lastname}
            />

            <MyInput
              placeholder="Нэр"
              value={values.firstname}
              onChangeText={handleChange("firstname")}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("firstname");
              }}
              touched={touched.firstname}
              error={errors.firstname}
            />

            <MyButton
              title="Хадгалах"
              buttonCss={personalinfoCss.saveBtn}
              onPress={handleSubmit}
            />
          </View>
        </MyKeyboardAvoiding>
      )}
    </Formik>
  );
};

export default Personalinfo;
