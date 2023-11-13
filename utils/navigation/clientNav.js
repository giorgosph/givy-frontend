import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchStack } from "./stacks/SearchStack";
import { MessageStack } from "./stacks/MessageStack";
import { SettingsStack } from "./stacks/SettingsStack";

import HomeScreen from "../../screens/Home/HomeScreen";
import PersonalDetailsScreen from "../../screens/Profile/PersonalDetailsScreen";

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
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      {SettingsStack()}
    </Stack.Navigator>
  );
}

export function ClientMessageTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {MessageStack()}
      {SettingsStack()}
    </Stack.Navigator>
  );
}