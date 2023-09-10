import React from "react";
import { Text, FlatList, Image, View } from "react-native";

import companyMenuCss from "./companyMenuCss";

const _pictures = [
  "https://images.immediate.co.uk/production/volatile/sites/30/2023/06/Ultraprocessed-food-58d54c3.jpg?quality=90&resize=440,400",
  "https://restaurantclicks.com/wp-content/uploads/2023/06/popular-american-foods.jpg",
  "https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg",
  "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
  "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
  "https://nativefoods.com/wp-content/uploads/2021/06/home-slider-1-1200x800.jpg",
  "https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg?m=facebook",
  "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
];

const CompanyMenu = () => {
  return (
    <FlatList
      style={companyMenuCss.list}
      data={_pictures}
      ListEmptyComponent={() => <Text>Хоосон байна</Text>}
      renderItem={({ item }) => (
        <View style={companyMenuCss.photoContainer}>
          <Text style={[companyMenuCss.photoTxt, companyMenuCss.name]}>
            Burger
          </Text>

          <Image style={companyMenuCss.photo} source={{ uri: item }} />

          <Text style={[companyMenuCss.photoTxt, companyMenuCss.price]}>
            12'900₮
          </Text>
        </View>
      )}
      horizontal
    />
  );
};

export default CompanyMenu;
