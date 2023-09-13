import React from "react";
import { ScrollView, View } from "react-native";
import MySafeArea from "../../../ui/MySafeArea";
import ProfileDesc from "../../../components/Profile/ProfileDesc/ProfileDesc";
import MyReviews from "../../../components/Profile/MyReviews";
// import FavCategories from "../../../components/Profile/FavCategories/FavCategories";
import Recommend from "../../../components/Profile/Recommend/Recommend";
import LinearRate from "../../../utils/LinearRate/LinearRate";

import profileCss from "./profileCss";

const Profile = () => {
  return (
    <MySafeArea>
      <ScrollView>
        <View style={profileCss.container}>
          <ProfileDesc />
          <MyReviews />
          <LinearRate />
          {/* <FavCategories /> */}
          <Recommend />
        </View>
      </ScrollView>
    </MySafeArea>
  );
};

export default Profile;
