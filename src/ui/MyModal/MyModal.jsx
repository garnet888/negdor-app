import React from "react";
import { View, Pressable, Modal, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import myModalCss from "./myModalCss";

const MyModal = ({ children, visible, onCancel }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={myModalCss.container}>
        <Pressable style={myModalCss.space} onPress={() => onCancel()} />

        <View style={myModalCss.content}>
          <TouchableOpacity
            style={myModalCss.hideModal}
            onPress={() => onCancel()}
          >
            <Entypo name="chevron-down" size={32} color="black" />
          </TouchableOpacity>

          {children}
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;
