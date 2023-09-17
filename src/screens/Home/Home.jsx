import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "../../ui/Search";
import { screens } from "../../lib/screens";

import homeCss from "./homeCss";

const Home = () => {
  const goto = useNavigation();

  const [searchText, setSearchText] = useState("");

  function gotoListing(cateName) {
    goto.navigate(screens.listingScn, {
      id: Math.floor(Math.random() * 100),
      name: cateName,
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
          <Search value={searchText} onChangeText={setSearchText} />
        </View>
      </View>

      <View style={homeCss.content}>
        {[...Array(8)].map((_, idx) => (
          <TouchableOpacity
            key={idx}
            style={homeCss.iconBox}
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
