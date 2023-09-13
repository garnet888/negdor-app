import React from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../lib/screens";
import MyBussiness from "../../components/AccountSettingsZZZ/MyBussiness/MyBussiness";
import BussinessForm from "../../components/AccountSettingsZZZ/MyBussiness/BussinessForm";

const Stack = createNativeStackNavigator();

export function MyBussinessStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name={screens.myBussiness} component={MyBussiness} />
      <Stack.Screen
        name={screens.bussinessForm}
        component={BussinessForm}
        options={{
          headerShown: true,
          headerBackTitle: "Буцах",
          headerTitle: "Мэдээлэл",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 18 },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
