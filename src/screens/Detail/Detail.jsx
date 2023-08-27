import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../constants/screens";
import { colors } from "../../constants/constColors";

import detailCss from "./detailCss";

const Detail = ({ route, navigation }) => {
  const isOpen = true;
  const { id, logo } = route.params;

  return (
    <ScrollView contentContainerStyle={detailCss.container}>
      <View style={detailCss.photos}>
        <Image
          style={detailCss.banner}
          source={{
            uri:
              id % 2 === 0
                ? "https://www.farfelue.com/wp-content/uploads/IMG_2733.jpg"
                : "https://www.farfelue.com/wp-content/uploads/IMG_1690.jpg",
          }}
        />

        <View style={detailCss.logoBox}>
          <Image style={detailCss.logo} source={{ uri: logo }} />
        </View>
      </View>

      <View style={detailCss.content}>
        <Text style={detailCss.name}>Organization Name</Text>

        <View style={detailCss.infos}>
          {/* &bull; */}

          <Text>
            Япон хоол
            <Text> • </Text>
          </Text>

          <Text>
            <AntDesign name="star" size={16} color={colors.starColor} />
            {" 4.6"}
            <Text> • </Text>
          </Text>

          <Text>
            236 сэтгэгдэл
            <Text> • </Text>
          </Text>

          <Text style={isOpen ? detailCss.openTxt : detailCss.closeTxt}>
            {isOpen ? "Нээлттэй" : "Хаалттай"}
          </Text>
        </View>

        <Text>+976 7777-7777</Text>

        <Text>Хүргэлтгүй, утсаар захиалга өгч очиж авах боломжтой</Text>

        <View style={detailCss.socials}>
          <Text
            style={detailCss.socialsItem}
            onPress={() =>
              gotoScreen({ navigation, screen: screens.locationScn })
            }
          >
            L
          </Text>
          <Text style={detailCss.socialsItem}>F</Text>
          <Text style={detailCss.socialsItem}>I</Text>

          <View style={detailCss.socialWeb}>
            <Text style={detailCss.socialWeb_text}>WWW</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;
