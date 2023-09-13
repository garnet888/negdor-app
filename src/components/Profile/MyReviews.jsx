import React from "react";
import { View } from "react-native";
import ReviewCard from "../../utils/ReviewCard/ReviewCard";

const MyReviews = () => {
  return (
    <View style={{ gap: 10 }}>
      {[...Array(2)].map((_, idx) => (
        <ReviewCard key={idx} />
      ))}
    </View>
  );
};

export default MyReviews;
