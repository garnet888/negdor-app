import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../../lib/screens";
import { useAuthCxt } from "../../../context/AuthContext";
import MySafeArea from "../../../ui/MySafeArea";
import MyLink from "../../../ui/MyLink";

import settingsMenuCss from "./settingsMenuCss";

const SettingsMenu = () => {
  const { logoutHandler } = useAuthCxt();
  const goto = useNavigation();

  const menuItems = [
    screens.personalinfoScn,
    screens.changePasswordScn,
    screens.myCompanyScn,
    "Гарах",
  ];

  function gotoMyCompany() {
    const _haveCompany = true;

    _haveCompany
      ? goto.navigate(screens.myCompanyScn, {
          id: "my_company",
          logo: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a7c265973643.5b065bbc75d1d.jpg",
        })
      : goto.navigate(screens.noCompanyScn);
  }

  function renderMenuItem(item) {
    if (item === "Гарах") {
      return (
        <MyLink
          title={item}
          textCss={settingsMenuCss.signupTxt}
          onPress={() => logoutHandler()}
        />
      );
    } else {
      return (
        <MyLink
          title={item}
          textCss={settingsMenuCss.itemTxt}
          onPress={() =>
            item === screens.myCompanyScn
              ? gotoMyCompany()
              : goto.navigate(item)
          }
        />
      );
    }
  }

  return (
    <MySafeArea>
      <FlatList
        contentContainerStyle={settingsMenuCss.container}
        data={menuItems}
        renderItem={({ item }) => renderMenuItem(item)}
        scrollEnabled={false}
      />
    </MySafeArea>
  );
};

export default SettingsMenu;
