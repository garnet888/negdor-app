import React, { useState } from "react";
import { Image, Platform, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";

import personalinfoCss from "./personalinfoCss";

const Personalinfo = () => {
  const goto = useNavigation();

  const [keyboardShown, setKeyboardShown] = useState(false);

  return (
    <MyKeyboardAvoiding
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 140}
      verticalMiddle={keyboardShown ? false : true}
    >
      <View style={personalinfoCss.form}>
        <View style={personalinfoCss.imageBox}>
          <Image
            style={personalinfoCss.image}
            source={{
              uri: "https://www.gifcen.com/wp-content/uploads/2021/12/goku-4.gif",
            }}
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
