import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./src/lib/screens";
import { colors } from "./src/lib/constColors";
import Header from "./src/utils/Header/Header";

import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Signup/Signup";
import Home from "./src/screens/Home/Home";
import Listing from "./src/screens/Listing/Listing";
import Detail from "./src/screens/Detail/Detail";
import Location from "./src/screens/Location/Location";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screens.homeScn}
        screenOptions={({ navigation }) => ({
          // animation: "none",
          header: () => <Header navigation={navigation} />,
          contentStyle: { backgroundColor: colors.grayWhite },
        })}
      >
        <Stack.Screen name={screens.signupScn} component={Signup} />
        <Stack.Screen name={screens.loginScn} component={Login} />
        <Stack.Screen
          name={screens.homeScn}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={screens.listingScn} component={Listing} />
        <Stack.Screen name={screens.detailScn} component={Detail} />
        <Stack.Screen name={screens.locationScn} component={Location} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
