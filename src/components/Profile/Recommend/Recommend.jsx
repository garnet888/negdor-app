import { View, Text, Image } from "react-native";
import React from "react";

import recommendCss from "./recommendCss";

const Recommend = () => {
  return (
    <View style={recommendCss.container}>
      <Text style={recommendCss.title}>Санал болгох газрууд</Text>

      <View style={recommendCss.logos}>
        {[...Array(6)].map((_, idx) => (
          <Image
            key={idx}
            source={{
              uri:
                idx % 2 === 0
                  ? "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/2048px-KFC_logo.svg.png"
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjkCvmD7NacaE5LuEq4B7OG2bZX3YyCwaRa8NtOS_ksg-BPBdJqF2SBcopy84mORAUubQ&usqp=CAU",
            }}
            style={recommendCss.logo}
          />
        ))}
      </View>
    </View>
  );
};

export default Recommend;
