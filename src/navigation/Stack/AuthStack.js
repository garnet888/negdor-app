import React, { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { screens } from "../../lib/screens";
import { colors } from "../../lib/constColors";
import Login from "../../screens/Auth/Login/Login";
import Signup from "../../screens/Auth/Signup/Signup";
import Profile from "../../screens/Auth/Profile/Profile";
import SettingsMenu from "../../screens/AccountSettings/SettingsMenu/SettingsMenu";
// import AccountSettingsZZZ from "../../screens/AccountSettingsZZZ/AccountSettingsZZZ";
import Personalinfo from "../../screens/AccountSettings/Personalinfo/Personalinfo";
import ChangePassword from "../../screens/AccountSettings/ChangePassword/ChangePassword";
import Detail from "../../screens/Company/Detail/Detail";
import NoCompany from "../../screens/Company/NoCompany/NoCompany";
import CompanyForm from "../../screens/AccountSettings/CompanyForm/CompanyForm";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: "Буцах",
        headerTitleAlign: "center",
        headerTintColor: colors.primary,
        headerStyle: css.menuHeaderBck,
        headerTitleStyle: { fontSize: 18 },
        contentStyle: css.content,
      }}
    >
      <Stack.Screen
        name={screens.loginScn}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.signupScn}
        component={Signup}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={screens.profileScn}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.settingsMenuScn}
        // component={AccountSettingsZZZ}
        component={SettingsMenu}
        options={{
          headerTitle: () => <Text style={css.menuHeaderTitle}>Меню</Text>,
        }}
      />

      <Stack.Screen name={screens.personalinfoScn} component={Personalinfo} />
      <Stack.Screen
        name={screens.changePasswordScn}
        component={ChangePassword}
      />

      <Stack.Screen
        name={screens.myCompanyScn}
        component={Detail}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(screens.companyFormScn, { type: "edit" })
              }
            >
              <Ionicons name="settings" size={30} color="darkgray" />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen
        name={screens.noCompanyScn}
        component={NoCompany}
        options={{
          headerTitle: "",
          headerRight: () => (
            <Image
              source={require("../../../assets/logo-with-name.png")}
              style={{ width: 100, height: 30, objectFit: "contain" }}
            />
          ),
        }}
      />
      <Stack.Screen
        name={screens.companyFormScn}
        component={CompanyForm}
        options={({ route }) => ({
          headerTitle:
            route.params.type === "add"
              ? "Байгууллага бүртгүүлэх"
              : "Мэдээлэл засах",
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

const css = StyleSheet.create({
  menuHeaderTitle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "500",
  },
  menuHeaderBck: {
    backgroundColor: "white",
  },

  content: {
    backgroundColor: "white",
  },
});
