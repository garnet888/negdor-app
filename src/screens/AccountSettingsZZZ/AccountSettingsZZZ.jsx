import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MyProfile from "../../components/AccountSettingsZZZ/MyProfile/MyProfile";
import ChangePassword from "../../components/AccountSettingsZZZ/ChangePassword/ChangePassword";
import { MyBussinessStack } from "../../navigation/Stack/MyBussinessStack";

import accountSettingsCss from "./accountSettingsCss";

const AccountSettingsZZZ = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "tab1", title: "Миний булан" },
    { key: "tab2", title: "Нууц үг солих" },
    { key: "tab3", title: "Бизнес профайл" },
  ];

  function renderTabBar({ props, activeIdx }) {
    return (
      <View style={accountSettingsCss.tabBar}>
        {props.navigationState.routes.map((route, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              onPress={() => setIndex(idx)}
              style={accountSettingsCss.tabItem}
            >
              <Text style={accountSettingsCss.tabItemTxt}>{route.title}</Text>

              <View
                style={[
                  accountSettingsCss.line,
                  idx === activeIdx && accountSettingsCss.activeLine,
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <TabView
      lazy
      navigationState={{ index, routes }}
      renderTabBar={(props) => renderTabBar({ props, activeIdx: index })}
      renderScene={SceneMap({
        tab1: MyProfile,
        tab2: ChangePassword,
        tab3: MyBussinessStack,
      })}
      renderLazyPlaceholder={() => (
        <View style={accountSettingsCss.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      onIndexChange={setIndex}
      sceneContainerStyle={accountSettingsCss.content}
    />
  );
};

export default AccountSettingsZZZ;
