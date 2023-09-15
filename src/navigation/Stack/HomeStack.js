import React, { Dimensions, Image, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../lib/screens";
import { colors } from "../../lib/constColors";
import Search from "../../ui/Search";
import Home from "../../screens/Home/Home";
import Listing from "../../screens/Company/Listing/Listing";
import Detail from "../../screens/Company/Detail/Detail";

const Stack = createNativeStackNavigator();

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "Буцах",
        headerTitle: "",
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.primary },
      }}
    >
      <Stack.Screen
        name={screens.homeScn}
        component={Home}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      />

      <Stack.Screen
        name={screens.listingScn}
        component={Listing}
        options={{
          headerBackTitleVisible: false,
          headerTitle: () => (
            <View style={{ width: SCREEN_WIDTH - 100 }}>
              <Search />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name={screens.detailScn}
        component={Detail}
        options={{
          headerTintColor: colors.primary,
          headerStyle: { backgroundColor: "white" },
          contentStyle: { backgroundColor: "white" },
          headerRight: () => (
            <Image
              source={require("../../../assets/logo-with-name.png")}
              style={{ width: 100, height: 30, objectFit: "contain" }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
