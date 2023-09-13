import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { screens } from "../../../lib/screens";

import profileDescCss from "./profileDescCss";

const ProfileDesc = () => {
  const goto = useNavigation();

  return (
    <View style={profileDescCss.container}>
      <View style={profileDescCss.info}>
        <View style={profileDescCss.imageBox}>
          <Image
            style={profileDescCss.image}
            source={{
              uri: "https://www.gifcen.com/wp-content/uploads/2021/12/goku-4.gif",
            }}
          />
        </View>

        <Text style={profileDescCss.name}>User's Name</Text>

        <TouchableOpacity
          onPress={() => goto.navigate(screens.settingsMenuScn)}
        >
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={profileDescCss.bio}>Insert Profile Bio Here</Text>

      <View style={profileDescCss.marks}>
        <View style={profileDescCss.marksTxtBox}>
          <MaterialCommunityIcons name="medal" size={28} color="orange" />
          <Text style={profileDescCss.marksTxt}>Идэвхитэй гишүүн</Text>
        </View>

        <View style={profileDescCss.marksTxtBox}>
          <AntDesign name="star" size={24} color="orange" />
          <Text style={profileDescCss.marksTxt}>69420 сэтгэгдэл</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileDesc;
