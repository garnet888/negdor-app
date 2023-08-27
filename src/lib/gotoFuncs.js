export function goBack({ navigation }) {
  navigation.goBack();
}

export function goFirstScreen({ navigation }) {
  navigation.popToTop();
}

export function gotoScreen({ navigation, screen, params }) {
  navigation.navigate(screen, params);
}
