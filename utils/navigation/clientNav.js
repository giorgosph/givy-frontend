import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchStack } from "./stacks/SearchStack";
import { SettingsStack } from "./stacks/SettingsStack";

import HomeScreen from "../../screens/Home/HomeScreen";
import { ProfileStack } from "./stacks/ProfileStack";

const Stack = createNativeStackNavigator();

export function ClientHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {SettingsStack()}
    </Stack.Navigator>
  );
}

export function ClientSearchTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {SearchStack()}
      {SettingsStack()}
    </Stack.Navigator>
  );
}

export function ClientProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {ProfileStack()}
      {SettingsStack()}
    </Stack.Navigator>
  );
}