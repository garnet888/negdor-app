import React from "react";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import { View } from "react-native";

const BussinessForm = () => {
  return (
    <MyKeyboardAvoiding>
      <View style={{ gap:40 }}>
        <MyInput placeholder="Хэрэглэгчийн нэр" />
        <MyInput placeholder="Овог" />
        <MyInput placeholder="Нэр" />
        <MyInput placeholder="Утасны дугаар" />
        <MyInput placeholder="И-мэйл хаяг" />
        <MyInput placeholder="Нууц үг" />
        <MyInput placeholder="Нууц үг давтах" />
      </View>

      <MyButton title="Хадгалах" />
    </MyKeyboardAvoiding>
  );
};

export default BussinessForm;
