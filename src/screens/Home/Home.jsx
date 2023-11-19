import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Axios from "../../../Axios";
import Search from "../../ui/Search";
import { screens } from "../../lib/screens";

import homeCss from "./homeCss";
import { renderContent } from "../../lib/otherFuncs";

const _icn_barber = require("../../../assets/icon-barber.png");
const _icn_knife = require("../../../assets/icon-knife-fork.png");
const _icn_cocktail = require("../../../assets/icon-cocktail.png");
const _icn_gaming = require("../../../assets/icon-gaming.png");
const _icn_coffee = require("../../../assets/icon-coffee.png");

const Home = () => {
  const goto = useNavigation();

  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Axios.get("/category/list")
      .then((res) => {
        if (res.data) {
          const { list } = res.data.data;
          const _categories = list.filter((item) => item.parentId === null);

          setCategories(_categories);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  function gotoListing(cateName) {
    goto.navigate(screens.listingScn, {
      name: cateName,
    });
  }

  function getViewCategories(categories, view = []) {
    const _view = [];

    categories.map((cate) =>
      view.map((item) => {
        if (cate.value === item) {
          return _view.push(cate);
        } else {
          return null;
        }
      })
    );

    return _view;
  }

  function getIcon(value) {
    switch (value) {
      case "Үсчин":
        return _icn_barber;
      case "Хоолны газар":
        return _icn_knife;
      case "Лоунж":
        return _icn_cocktail;
      case "Тоглоомын газар":
        return _icn_gaming;
      case "Кофе":
        return _icn_coffee;
      default:
        return null;
    }
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

      {renderContent(
        { isLoading, isError },
        <View style={homeCss.content}>
          {getViewCategories(categories, [
            "Үсчин",
            "Хоолны газар",
            "Лоунж",
            "Тоглоомын газар",
            "Кофе",
          ]).map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={homeCss.iconBox}
              onPress={() => gotoListing(item.value)}
            >
              <Image style={homeCss.icon} source={getIcon(item.value)} />
              <Text style={homeCss.iconTxt}>{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Home;
