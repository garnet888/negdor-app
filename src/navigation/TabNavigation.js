import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { screens } from "../lib/screens";
import { colors } from "../lib/constColors";
import { HomeStack } from "./Stack/HomeStack";
import { AuthStack } from "./Stack/AuthStack";
import Location from "../screens/Location/Location";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName = "";
          const iconSize = route.name === screens.authTab ? 30 : 26;
          const iconColor = focused ? colors.primary : color;

          switch (route.name) {
            case screens.homeTab:
              iconName = focused ? "home" : "home-outline";
              break;
            case screens.locationScn:
              iconName = focused ? "map" : "map-outline";
              break;
            case screens.authTab:
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
          }

          return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name={screens.homeTab} component={HomeStack} />
      <Tab.Screen name={screens.locationScn} component={Location} />
      <Tab.Screen name={screens.authTab} component={AuthStack} />
    </Tab.Navigator>
  );
}
