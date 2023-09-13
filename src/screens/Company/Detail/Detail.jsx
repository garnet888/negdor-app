import React from "react";
import { View, Image, Text } from "react-native";
import { screens } from "../../../lib/screens";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import CompanyDesc from "../../../components/CompanyDetail/CompanyDesc/CompanyDesc";
import CompanyRate from "../../../components/CompanyDetail/CompanyRate/CompanyRate";
import CompanyComfort from "../../../components/CompanyDetail/CompanyComfort/CompanyComfort";
import AmbientPhotos from "../../../components/CompanyDetail/AmbientPhotos/AmbientPhotos";
import CompanyMenu from "../../../components/CompanyDetail/CompanyMenu/CompanyMenu";
import Reviews from "../../../components/CompanyDetail/Review/Reviews";

import detailCss from "./detailCss";

const Detail = ({ route, navigation }) => {
  const { id, logo } = route.params;

  return (
    <MyKeyboardAvoiding keyboardVerticalOffset={80}>
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
        <CompanyDesc navigation={navigation} />

        <>
          <Text style={detailCss.title}>Үнэлгээ</Text>
          <CompanyRate />
        </>

        <>
          <Text style={detailCss.title}>Орчин, тав тухтай байдал</Text>
          <CompanyComfort />
        </>

        <AmbientPhotos />

        <>
          <Text style={detailCss.title}>Breakfast</Text>
          <CompanyMenu />

          <Text style={detailCss.title}>Lunch</Text>
          <CompanyMenu />
        </>

        {route.name === screens.myCompanyScn || (
          <>
            <View style={detailCss.line} />
            <Text style={detailCss.title}>Сэтгэгдэл</Text>
            <Reviews />
          </>
        )}
      </View>
    </MyKeyboardAvoiding>
  );
};

export default Detail;
