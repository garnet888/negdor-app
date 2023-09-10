import React from "react";
import { View, Text } from "react-native";

import linearRate from "./linearRateCss";

const LinearRate = ({}) => {
  return (
    <View style={linearRate.container}>
      <View style={linearRate.row}>
        <Text style={linearRate.starCount}>5 од</Text>
        <View style={linearRate.border}>
          <View style={linearRate.line} />
        </View>
        <Text style={linearRate.peopleCount}>1</Text>
      </View>

      <View style={linearRate.row}>
        <Text style={linearRate.starCount}>4 од</Text>
        <View style={linearRate.border}>
          <View style={[linearRate.line, linearRate.four]} />
        </View>
        <Text style={linearRate.peopleCount}>3</Text>
      </View>

      <View style={linearRate.row}>
        <Text style={linearRate.starCount}>3 од</Text>
        <View style={linearRate.border}>
          <View style={linearRate.line} />
        </View>
        <Text style={linearRate.peopleCount}>1</Text>
      </View>

      <View style={linearRate.row}>
        <Text style={linearRate.starCount}>2 од</Text>
        <View style={linearRate.border}>
          <View style={linearRate.line} />
        </View>
        <Text style={linearRate.peopleCount}>1</Text>
      </View>

      <View style={linearRate.row}>
        <Text style={linearRate.starCount}>1 од</Text>
        <View style={linearRate.border}>
          <View style={linearRate.line} />
        </View>
        <Text style={linearRate.peopleCount}>1</Text>
      </View>
    </View>
  );
};

export default LinearRate;
