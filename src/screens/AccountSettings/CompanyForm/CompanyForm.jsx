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

import companyFormCss from "./companyFormCss";

const _noIMG = require("../../../../assets/no-image.png");

const CompanyForm = () => {
  const goto = useNavigation();

  const [banner, setBanner] = useState("");
  const [logo, setLogo] = useState("");

  const [showUploadBanner, setShowUploadBanner] = useState(false);
  const [showUploadLogo, setShowUploadLogo] = useState(false);
  const [keyboardShown, setKeyboardShown] = useState(false);

  const infosSchema = Yup.object().shape({
    name: Yup.string().required("Хоосон байна!"),
    director: Yup.string()
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
    category: Yup.string().required("Хоосон байна!"),
    subCategory: Yup.string().required("Хоосон байна!"),
    shortDescription: Yup.string().required("Хоосон байна!"),
    fullDescription: Yup.string().required("Хоосон байна!"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        director: "",
        phonenumber: "",
        email: "",
        category: "",
        subCategory: "",
        shortDescription: "",
        fullDescription: "",
      }}
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
          keyboardVerticalOffset={
            keyboardShown ? (Platform.OS === "ios" ? 64 : 160) : 0
          }
        >
          <View
            style={[
              companyFormCss.bannerBox,
              banner || companyFormCss.noBannerBox,
            ]}
          >
            <Image
              style={[companyFormCss.banner, banner || companyFormCss.noBanner]}
              source={banner ? { uri: banner } : _noIMG}
            />

            <TouchableOpacity
              style={companyFormCss.uploadBanner}
              onPress={() => setShowUploadBanner(true)}
            >
              <Entypo name="camera" size={20} color="white" />
            </TouchableOpacity>
            <UploadPhoto
              visible={showUploadBanner}
              onCancel={() => setShowUploadBanner(false)}
              setPhoto={setBanner}
            />
          </View>

          <View style={companyFormCss.logoContainer}>
            <View style={companyFormCss.logoBox}>
              <Image
                style={companyFormCss.logo}
                source={logo ? { uri: logo } : _noIMG}
              />
            </View>

            <TouchableOpacity
              style={companyFormCss.logoUpload}
              onPress={() => setShowUploadLogo(true)}
            >
              <Entypo name="camera" size={20} color="white" />
            </TouchableOpacity>
            <UploadPhoto
              visible={showUploadLogo}
              onCancel={() => setShowUploadLogo(false)}
              setPhoto={setLogo}
            />
          </View>

          <View style={companyFormCss.form}>
            <MyInput
              placeholder="Байгууллагын нэр"
              value={values.name}
              onChangeText={handleChange("name")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("name");
              }}
              touched={touched.name}
              error={errors.name}
            />

            <MyInput
              placeholder="Захиралын нэр"
              value={values.director}
              onChangeText={handleChange("director")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("director");
              }}
              touched={touched.director}
              error={errors.director}
            />

            <MyInput
              placeholder="Байгууллагын утас"
              value={values.phonenumber}
              onChangeText={handleChange("phonenumber")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("phonenumber");
              }}
              touched={touched.phonenumber}
              error={errors.phonenumber}
            />

            <MyInput
              placeholder="Байгууллагын и-мэйл"
              value={values.email}
              onChangeText={handleChange("email")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("email");
              }}
              touched={touched.email}
              error={errors.email}
            />

            <MyInput
              placeholder="Үйлчилгээний төрөл"
              value={values.category}
              onChangeText={handleChange("category")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("category");
              }}
              touched={touched.category}
              error={errors.category}
            />

            <MyInput
              placeholder="Дэд төрөл"
              value={values.subCategory}
              onChangeText={handleChange("subCategory")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("subCategory");
              }}
              touched={touched.subCategory}
              error={errors.subCategory}
            />

            <MyInput placeholder="Цагийн хуваарь" onChangeText={() => null} />

            <MyInput
              placeholder="Хүргэлтийн тухай"
              value={values.shortDescription}
              onChangeText={handleChange("shortDescription")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("shortDescription");
              }}
              touched={touched.shortDescription}
              error={errors.shortDescription}
            />

            <MyInput
              placeholder="Байгууллагын товч тайлбар"
              value={values.fullDescription}
              onChangeText={handleChange("fullDescription")}
              onFocus={() => setKeyboardShown(true)}
              onBlur={() => {
                setKeyboardShown(false);
                setFieldTouched("fullDescription");
              }}
              touched={touched.fullDescription}
              error={errors.fullDescription}
            />

            <MyButton
              title="Хадгалах"
              buttonCss={companyFormCss.saveBtn}
              onPress={handleSubmit}
            />
          </View>
        </MyKeyboardAvoiding>
      )}
    </Formik>
  );
};

export default CompanyForm;
