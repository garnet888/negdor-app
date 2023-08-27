import React from "react";
import { View, Text, Modal } from "react-native";
import MyButton from "../MyButton/MyButton";

import myModalCss from "./myModalCss";

const MyModal = ({ visible, setVisible }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={myModalCss.modal}>
        <View style={myModalCss.container}>
          <View style={myModalCss.content}>
            <Text>This is Modal</Text>
          </View>

          <MyButton text="Гарах" onPress={() => setVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
