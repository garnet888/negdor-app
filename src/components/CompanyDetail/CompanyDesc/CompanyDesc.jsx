import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { companyIsOpenChecker } from "../../../lib/checkerFunctions";
// import { screens } from "../../../lib/screens";

import companyDescCss from "./companyDescCss";

// const _direction = require("../../../../assets/direction.png");
const _facebook = require("../../../../assets/facebook.png");
const _instagram = require("../../../../assets/instagram.png");

const CompanyDesc = ({ data }) => {
  function getSocialLink(type) {
    let link = "";

    if (data.socials?.find((item) => item.plf === type)?.link) {
      const rawLink = data.socials?.find((item) => item.plf === type).link;

      if (String(rawLink).search("http") > -1) {
        link = rawLink;
      } else {
        link = "http://" + rawLink;
      }
    }

    return link;
  }

  return (
    <View style={companyDescCss.container}>
      <Text style={companyDescCss.name}>{data.name}</Text>

      <View style={companyDescCss.infos}>
        {data.categories.length > 0 ? (
          <Text>
            {data.categories.map((item, idx) =>
              data.categories.length === idx + 1
                ? item.value
                : item.value + ", "
            )}
            <Text> &bull; </Text>
          </Text>
        ) : null}

        {data.score ? (
          <Text>
            <AntDesign name="star" size={16} color="orange" />
            {" " + data.score}
            <Text> &bull; </Text>
          </Text>
        ) : null}

        <Text>
          ??? сэтгэгдэл
          <Text> &bull; </Text>
        </Text>

        {data.timeTable ? (
          <Text
            style={
              companyIsOpenChecker(data.timeTable, true)
                ? companyDescCss.openTxt
                : companyDescCss.closeTxt
            }
          >
            {companyIsOpenChecker(data.timeTable, true)
              ? "Нээлттэй"
              : "Хаалттай"}
            <Text style={{ color: "black" }}> &bull; </Text>
          </Text>
        ) : null}

        {data.phonenumbers.length > 0 ? (
          <Text>
            {data.phonenumbers.map((item, idx) =>
              data.phonenumbers.length === idx + 1 ? item : item + ", "
            )}
            <Text> &bull; </Text>
          </Text>
        ) : null}

        {data.emails.length > 0 ? (
          <Text>
            {data.emails.map((item, idx) =>
              data.emails.length === idx + 1 ? item : item + ", "
            )}
          </Text>
        ) : null}
      </View>

      {!data.shortDescription || data.shortDescription === "empty" ? null : (
        <Text>{data.shortDescription}</Text>
      )}

      {data.socials.length > 0 ? (
        <View style={companyDescCss.socials}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate(screens.locationScn)}
          >
            <Image style={companyDescCss.icon} source={_direction} />
          </TouchableOpacity> */}

          {getSocialLink("fb") ? (
            <TouchableOpacity
              onPress={() => Linking.openURL(getSocialLink("fb"))}
            >
              <Image style={companyDescCss.icon} source={_facebook} />
            </TouchableOpacity>
          ) : null}

          {getSocialLink("ig") ? (
            <TouchableOpacity
              onPress={() => Linking.openURL(getSocialLink("ig"))}
            >
              <Image style={companyDescCss.icon} source={_instagram} />
            </TouchableOpacity>
          ) : null}

          {getSocialLink("web") ? (
            <TouchableOpacity
              style={[companyDescCss.icon, companyDescCss.web]}
              onPress={() => Linking.openURL(getSocialLink("web"))}
            >
              <Text style={companyDescCss.web_text}>WWW</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default CompanyDesc;
