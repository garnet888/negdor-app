import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../constants/screens";
import RatedStars from "../../components/RatedStars/RatedStars";

import listingItemCss from "./listingItemCss";

const ListingItem = ({ data, navigation }) => {
  const _isOpen = false;

  function gotoDetail({ id, logo }) {
    gotoScreen({ navigation, screen: screens.detailScn, params: { id, logo } });
  }

  return (
    <TouchableOpacity
      style={listingItemCss.container}
      onPress={() =>
        gotoDetail({
          id: data.id,
          logo:
            data.id % 3 === 1
              ? "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a7c265973643.5b065bbc75d1d.jpg"
              : "https://img.freepik.com/premium-vector/ramen-logo-design-vector-japanese-food_562967-76.jpg",
        })
      }
    >
      <Image
        style={listingItemCss.logo}
        source={{
          uri:
            data.id % 3 === 1
              ? "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a7c265973643.5b065bbc75d1d.jpg"
              : "https://img.freepik.com/premium-vector/ramen-logo-design-vector-japanese-food_562967-76.jpg",
        }}
      />

      <View style={listingItemCss.content}>
        <Text style={listingItemCss.name} numberOfLines={1}>
          {data.name}
        </Text>
        <RatedStars rate={4} peopleCount={Math.floor(Math.random() * 1000)} />
        <View style={listingItemCss.types}>
          <Text style={listingItemCss.types_item}>Япон хоол</Text>
          <Text style={listingItemCss.types_item}>Рамен</Text>
        </View>

        <View style={listingItemCss.isOpen}>
          <Text
            style={_isOpen ? listingItemCss.openTxt : listingItemCss.closeTxt}
          >
            {_isOpen ? "Нээлттэй" : "Хаалттай"}
          </Text>

          {_isOpen || <Text> - Нээх цаг 10am</Text>}
        </View>

        <Text style={listingItemCss.info_desc} numberOfLines={2}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingItem;
