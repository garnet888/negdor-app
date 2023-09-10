import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../lib/constColors";

import companyComfortCss from "./companyComfortCss";

const _comfort1 = [
  "Карт уншина",
  "Ширээ захиалах боломжтой",
  "“Lunch Set”  хоолууд",
  "Хүргэлттэй",
  "Үнэгүй Wi-Fi",
];
const _comfort2 = [
  "Гадна суудалтай",
  "Хүүхдэд ээлтэй",
  "Эрүүл мэндийн үзлэгт тэнцсэн",
  "Дуу шуугиан багатай",
  "VIP өрөөтэй",
];

const CompanyComfort = () => {
  return (
    <View style={companyComfortCss.container}>
      <View style={companyComfortCss.list}>
        {_comfort1.map((item, idx) => (
          <View key={idx} style={companyComfortCss.item}>
            <Entypo name="check" size={18} color={colors.primary} />
            <Text>{item}</Text>
          </View>
        ))}
      </View>

      <View style={companyComfortCss.list}>
        {_comfort2.map((item, idx) => (
          <View key={idx} style={companyComfortCss.item}>
            <Entypo name="check" size={18} color={colors.primary} />
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CompanyComfort;
