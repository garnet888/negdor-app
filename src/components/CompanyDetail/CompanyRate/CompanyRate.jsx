import React from "react";
import { Text, View } from "react-native";
import RatedStars from "../../../utils/RatedStars/RatedStars";
import LinearRate from "../../../utils/LinearRate/LinearRate";

import companyRateCss from "./companyRateCss";

const CompanyRate = () => {
  return (
    <View>
      <View style={companyRateCss.starRate}>
        <View style={companyRateCss.countContainer}>
          <Text style={companyRateCss.count}>4.3</Text>
          <Text style={companyRateCss.total}>нийт үнэлсэн тоо: 5</Text>
        </View>

        <RatedStars rate={4} starSize={22} />
      </View>

      <LinearRate />
    </View>
  );
};

export default CompanyRate;
