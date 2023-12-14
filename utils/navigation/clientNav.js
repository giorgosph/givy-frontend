import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchStack } from "./stacks/SearchStack";
import { SettingsStack } from "./stacks/SettingsStack";
import { ProfileStack } from "./stacks/ProfileStack";

import HomeScreen from "../../screens/Home/HomeScreen";
import DrawDetailsScreen from "../../screens/Search/DrawDetailsScreen";
import AccountConfirmationScreen from "../../screens/Auth/AccountConfirmationScreen";

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
      <Stack.Screen name="DrawDetails" component={DrawDetailsScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Navigator>
  );
}