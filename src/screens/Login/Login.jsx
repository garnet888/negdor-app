import React, { useState } from "react";
import { View, Text } from "react-native";
import MyButton from "../../ui/MyButton/MyButton";
import MyLink from "../../ui/MyLink/MyLink";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../constants/screens";
import MyModal from "../../ui/MyModal/MyModal";

import loginCss from "./loginCss";

const Login = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={loginCss.container}>
      <Text style={loginCss.title}>{screens.loginScn}</Text>

      <MyButton
        text="Show Modal"
        onPress={() => setVisibleModal(true)}
        outline
      />
      <MyModal visible={visibleModal} setVisible={setVisibleModal} />

      <MyLink
        text={"< " + screens.signupScn + " >"}
        onPress={() =>
          gotoScreen({
            navigation,
            screen: screens.signupScn,
          })
        }
      />
    </View>
  );
};

export default Login;
