import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { TabNavigation } from "./src/navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
