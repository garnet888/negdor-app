import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { screens } from "../../../lib/screens";
import { companyIsOpenChecker } from "../../../lib/checkerFunctions";
import RatedStars from "../../../utils/RatedStars/RatedStars";

import listingItemCss from "./listingItemCss";

const noIMG = require("../../../../assets/no-image.png");

const ListingItem = ({ data, goto }) => {
  function openTimeFinder(timeTable) {
    const map = {
      1: "MONDAY",
      2: "TUESDAY",
      3: "WEDNESDAY",
      4: "THURSDAY",
      5: "FRIDAY",
      6: "SATURDAY",
      7: "SUNDAY",
    };

    const today = new Date().getDay();
    const timeTableToday = timeTable?.find(
      (item) => item.weekday === map[today]
    );

    return timeTableToday ? timeTableToday.startTime + "am" : "";
  }

  return (
    <TouchableOpacity
      style={listingItemCss.container}
      onPress={() => goto.navigate(screens.detailScn, { id: data.id })}
    >
      <Image
        style={listingItemCss.logo}
        source={data.logo ? { uri: data.logo } : noIMG}
      />

      <View style={listingItemCss.content}>
        <Text style={listingItemCss.name} numberOfLines={1}>
          {data.name}
        </Text>

        {data.score ? (
          <RatedStars
            rate={data.score}
            // peopleCount={Math.floor(Math.random() * 1000)}
          />
        ) : null}

        <View style={listingItemCss.types}>
          {data.categories.slice(0, 2).map((cate, idx) => (
            <Text key={idx} style={listingItemCss.types_item}>
              {cate.value}
            </Text>
          ))}
        </View>

        <View style={listingItemCss.isOpen}>
          <Text
            style={
              companyIsOpenChecker(data.timeTable, true)
                ? listingItemCss.openTxt
                : listingItemCss.closeTxt
            }
          >
            {companyIsOpenChecker(data.timeTable)}
          </Text>

          {companyIsOpenChecker(data.timeTable, true) || (
            <Text>{" - Нээх цаг " + openTimeFinder(data.timeTable)}</Text>
          )}
        </View>

        <Text style={listingItemCss.info_desc} numberOfLines={2}>
          {data.fullDescription}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingItem;
