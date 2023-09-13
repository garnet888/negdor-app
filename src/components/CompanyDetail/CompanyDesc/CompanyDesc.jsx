import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { screens } from "../../../lib/screens";

import companyDescCss from "./companyDescCss";

const _direction = require("../../../../assets/direction.png");
const _facebook = require("../../../../assets/facebook.png");
const _instagram = require("../../../../assets/instagram.png");

const CompanyDesc = ({ navigation }) => {
  const isOpen = false;

  return (
    <View style={companyDescCss.container}>
      <Text style={companyDescCss.name}>Organization Name</Text>

      <View style={companyDescCss.infos}>
        {/* &bull; */}

        <Text>
          Япон хоол
          <Text> • </Text>
        </Text>

        <Text>
          <AntDesign name="star" size={16} color="orange" />
          {" 4.6"}
          <Text> • </Text>
        </Text>

        <Text>
          236 сэтгэгдэл
          <Text> • </Text>
        </Text>

        <Text style={isOpen ? companyDescCss.openTxt : companyDescCss.closeTxt}>
          {isOpen ? "Нээлттэй" : "Хаалттай"}
        </Text>
      </View>

      <Text>+976 7777-7777</Text>

      <Text>Хүргэлтгүй, утсаар захиалга өгч очиж авах боломжтой</Text>

      <View style={companyDescCss.socials}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screens.locationScn)}
        >
          <Image style={companyDescCss.icon} source={_direction} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://facebook.com")}
        >
          <Image style={companyDescCss.icon} source={_facebook} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://instagram.com")}
        >
          <Image style={companyDescCss.icon} source={_instagram} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[companyDescCss.icon, companyDescCss.web]}
          onPress={() => Linking.openURL("https://negdor.com")}
        >
          <Text style={companyDescCss.web_text}>WWW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompanyDesc;
