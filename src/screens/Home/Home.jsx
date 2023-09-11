import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Search from "../../ui/Search";
import { gotoScreen } from "../../lib/gotoFuncs";
import { screens } from "../../lib/screens";

import homeCss from "./homeCss";

const Home = ({ navigation }) => {
  const _id = Math.floor(Math.random() * 100);

  function gotoListing(cateName) {
    gotoScreen({
      navigation,
      screen: screens.listingScn,
      params: { id: _id, name: cateName },
    });
  }

  return (
    <View>
      <View style={homeCss.coverBox}>
        <Image
          style={homeCss.cover}
          source={require("../../../assets/cover-back.jpg")}
        />

        <View style={homeCss.searchBox}>
          <Search />
        </View>
      </View>

      <View style={homeCss.content}>
        {[...Array(8)].map((_, idx) => (
          <TouchableOpacity
            key={idx}
            style={homeCss.iconVw}
            onPress={() =>
              gotoListing(idx % 2 === 0 ? "Тоглоомын газар" : "Үсчин")
            }
          >
            <Image
              style={homeCss.icon}
              source={
                idx % 2 === 0
                  ? require("../../../assets/icon-gaming.png")
                  : require("../../../assets/icon-barber.png")
              }
            />
            <Text style={homeCss.iconTxt}>
              {idx % 2 === 0 ? "Тоглоомын газар" : "Үсчин"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Home;
