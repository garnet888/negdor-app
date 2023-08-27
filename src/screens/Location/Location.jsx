import React from "react";
import { View, Text } from "react-native";

import locationCss from "./locationCss";

const Location = () => {
  return (
    <View style={locationCss.container}>
      <Text style={locationCss.title}>Location</Text>
    </View>
  );
};

export default Location;
