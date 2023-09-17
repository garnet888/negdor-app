import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyInput from "../../../ui/MyInput";
import MyButton from "../../../ui/MyButton";
import RatedStars from "../../../utils/RatedStars/RatedStars";

import reviewCss from "./reviewCss";

const _reviews = [
  "Anim nostrud laborum tempor laborum anim voluptate exercitation amet Lorem deserunt duis sunt reprehenderit.",
  "Sunt ullamco culpa irure non minim officia labore quis. Excepteur aute ipsum amet nisi. Esse commodo nulla enim do exercitation sint.",
  "Enim adipisicing aliqua sunt labore occaecat mollit esse Lorem. Eu pariatur minim duis sint consequat mollit eiusmod adipisicing reprehenderit occaecat cupidatat nulla in aute.",
  "Eu sunt aute eiusmod ut id ad. Amet amet culpa ut sint.",
  "Id reprehenderit commodo est aliqua. Velit non non nisi tempor fugiat magna fugiat officia eu magna dolor tempor laborum. Ut minim culpa est anim occaecat laborum ad enim. Labore aute tempor duis voluptate eu reprehenderit quis id incididunt incididunt eiusmod ullamco reprehenderit. Cillum ex consectetur dolor sit. Est ex consequat veniam sint nisi amet. Consequat sunt dolor consequat adipisicing non est in qui.",
];

const Reviews = () => {
  const [review, setReview] = useState("");

  return (
    <View style={reviewCss.container}>
      <RatedStars starSize={20} />

      <MyInput
        placeholder="Сэтгэгдэл..."
        value={review}
        onChangeText={setReview}
      />
      <MyButton title="Илгээх" />

      <View style={reviewCss.allReviews}>
        {_reviews.map((item, idx) => (
          <View key={idx} style={reviewCss.review}>
            <View style={reviewCss.info}>
              <FontAwesome
                name="user-circle-o"
                size={Platform.OS === "android" ? 36 : 40}
                color="white"
              />

              <Text style={reviewCss.name}>User's name</Text>
            </View>

            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;
