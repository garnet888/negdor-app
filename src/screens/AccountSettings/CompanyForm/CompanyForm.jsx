import React, { useState } from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

  return (
    <MyKeyboardAvoiding
      keyboardVerticalOffset={
        keyboardShown ? (Platform.OS === "ios" ? 64 : 160) : 0
      }
    >
      <View
        style={[companyFormCss.bannerBox, banner || companyFormCss.noBannerBox]}
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
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Байгууллагын захирал"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Байгууллагын утас"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Байгууллагын и-мэйл"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Үйлчилгээний төрөл"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Дэд төрөл"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Байгууллагын товч тайлбар"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />

        <MyButton
          title="Хадгалах"
          buttonCss={companyFormCss.saveBtn}
          onPress={() => goto.navigate(screens.profileScn)}
        />
      </View>
    </MyKeyboardAvoiding>
  );
};

export default CompanyForm;
