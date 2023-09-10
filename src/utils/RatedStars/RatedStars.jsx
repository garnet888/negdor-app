import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import ratedStarsCss from "./ratedStarsCss";

const RatedStars = ({ rate, peopleCount, starSize = 12 }) => {
  function getRatedStars() {
    return [...Array(5)].map((_, idx) => (
      <AntDesign
        key={idx}
        name="star"
        style={[
          { fontSize: starSize },
          ratedStarsCss.star,
          idx + 1 <= rate ? ratedStarsCss.starFill : ratedStarsCss.starNone,
        ]}
      />
    ));
  }

  return (
    <View style={ratedStarsCss.container}>
      {getRatedStars()}

      <Text>{peopleCount}</Text>
    </View>
  );
};

export default RatedStars;
