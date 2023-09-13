import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RatedStars from "../RatedStars/RatedStars";

import reviewCardCss from "./reviewCardCss";

const ReviewCard = ({ showUserInfo = false }) => {
  return (
    <View style={reviewCardCss.container}>
      {showUserInfo && (
        <View style={reviewCardCss.userInfo}>
          <View style={reviewCardCss.imageContainer}>
            <View style={reviewCardCss.imageBox}>
              <Image
                style={reviewCardCss.image}
                source={{
                  uri: "https://www.gifcen.com/wp-content/uploads/2021/12/goku-4.gif",
                }}
              />
            </View>

            <View style={reviewCardCss.medal}>
              <MaterialCommunityIcons name="medal" size={16} color="white" />
            </View>
          </View>

          <View>
            <Text style={reviewCardCss.name}>User's Name</Text>
            <Text>Sea Food</Text>
          </View>
        </View>
      )}

      <Image
        style={reviewCardCss.banner}
        source={{
          uri: "https://images.alphacoders.com/593/593284.jpg",
        }}
      />

      <View style={reviewCardCss.companyInfo}>
        <Text style={reviewCardCss.name}>Company Name</Text>
        <RatedStars rate={4} />

        <Text style={reviewCardCss.review}>
          Commodo aute velit deserunt qui labore mollit esse Lorem deserunt ad
          labore. Magna esse id dolor enim aliqua consectetur commodo non.
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;
