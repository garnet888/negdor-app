import React, { useState } from "react";
import { Image, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";

import companyFormCss from "./companyFormCss";

const CompanyForm = () => {
  const goto = useNavigation();

  const [keyboardShown, setKeyboardShown] = useState(false);

  return (
    <MyKeyboardAvoiding
      keyboardVerticalOffset={
        keyboardShown ? (Platform.OS === "ios" ? 64 : 160) : 0
      }
    >
      <Image
        style={companyFormCss.banner}
        source={{
          uri: "https://www.farfelue.com/wp-content/uploads/IMG_1690.jpg",
        }}
      />

      <View style={companyFormCss.logoBox}>
        <Image
          style={companyFormCss.logo}
          source={{
            uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a7c265973643.5b065bbc75d1d.jpg",
          }}
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
