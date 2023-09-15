import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import MyModal from "../../ui/MyModal/MyModal";

import uploadPhotoCss from "./uploadPhotoCss";

const UploadPhoto = ({ visible, onCancel, setPhoto }) => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  async function uploadFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      onCancel();
    }
  }

  async function uploadFromCamera() {
    if (status && !status.granted) {
      await requestPermission();
    }

    const result = await ImagePicker.launchCameraAsync({ allowsEditing: true });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      onCancel();
    }
  }

  return (
    <MyModal visible={visible} onCancel={onCancel}>
      <View style={uploadPhotoCss.container}>
        <TouchableOpacity
          style={uploadPhotoCss.button}
          onPress={() => uploadFromGallery()}
        >
          <Text style={uploadPhotoCss.btnText}>Утаснаас оруулах</Text>
        </TouchableOpacity>

        <View style={uploadPhotoCss.line} />

        <TouchableOpacity
          style={uploadPhotoCss.button}
          onPress={() => uploadFromCamera()}
        >
          <Text style={uploadPhotoCss.btnText}>Зураг авч оруулах</Text>
        </TouchableOpacity>
      </View>
    </MyModal>
  );
};

export default UploadPhoto;
