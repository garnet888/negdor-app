import React from "react";
import { View, Text, ImageBackground } from "react-native";

import authCoverCss from "./authCoverCss";

const _cover = require("../../../assets/cover-back.jpg");

const AuthCover = ({ title = "" }) => {
  return (
    <View style={authCoverCss.container}>
      <ImageBackground
        style={authCoverCss.coverBck}
        imageStyle={authCoverCss.cover}
        source={_cover}
      />

      <View style={authCoverCss.textBox}>
        <Text style={authCoverCss.title}>{title}</Text>
        <Text style={authCoverCss.text}>
          Салбартаа тэргүүлэгч нарын нэг болоорой!
        </Text>
      </View>
    </View>
  );
};

export default AuthCover;
