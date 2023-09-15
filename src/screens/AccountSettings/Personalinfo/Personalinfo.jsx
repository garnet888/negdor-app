import React, { useState } from "react";
import { Image, Platform, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

  return (
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
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Овог"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />
        <MyInput
          placeholder="Нэр"
          onFocus={() => setKeyboardShown(true)}
          onBlur={() => setKeyboardShown(false)}
        />

        <MyButton
          title="Хадгалах"
          buttonCss={personalinfoCss.saveBtn}
          onPress={() => goto.navigate(screens.profileScn)}
        />
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Personalinfo;
