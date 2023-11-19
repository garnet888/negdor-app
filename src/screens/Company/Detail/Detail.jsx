import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { screens } from "../../../lib/screens";
import { renderContent } from "../../../lib/otherFuncs";
import Axios from "../../../../Axios";
import MyKeyboardAvoiding from "../../../utils/MyKeyboardAvoiding";
import CompanyDesc from "../../../components/CompanyDetail/CompanyDesc/CompanyDesc";
import CompanyRate from "../../../components/CompanyDetail/CompanyRate/CompanyRate";
import CompanyComfort from "../../../components/CompanyDetail/CompanyComfort/CompanyComfort";
import AmbientPhotos from "../../../components/CompanyDetail/AmbientPhotos/AmbientPhotos";
import CompanyMenu from "../../../components/CompanyDetail/CompanyMenu/CompanyMenu";
import Reviews from "../../../components/CompanyDetail/Review/Reviews";

import detailCss from "./detailCss";

const noIMG = require("../../../../assets/no-image.png");

const Detail = ({ route, navigation }) => {
  const { id } = route.params;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Axios.get(`/organization/${id}`)
      .then((res) => {
        if (res.data) {
          setData(res.data.data);
          setIsLoading(false);
        } else {
          setIsError(false);
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsError(false);
        setIsLoading(false);
      });
  }, [id]);

  return renderContent(
    { isLoading, isError },
    <MyKeyboardAvoiding keyboardVerticalOffset={80}>
      <View style={detailCss.photos}>
        <Image
          style={detailCss.banner}
          source={data.banner ? { uri: data.banner } : noIMG}
        />

        <View style={detailCss.logoBox}>
          <Image
            style={detailCss.logo}
            source={data.logo ? { uri: data.logo } : noIMG}
          />
        </View>
      </View>

      <View style={detailCss.content}>
        <CompanyDesc navigation={navigation} data={data} />

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
