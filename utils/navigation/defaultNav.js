import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "./stacks/AuthStack";
import { SettingsStack } from "./stacks/SettingsStack";

import HomeScreen from "../../screens/Home/HomeScreen";
import PrivacyPolicyScreen from "../../screens/Settings/PrivacyPolicyScreen";
import TermsConditionsScreen from "../../screens/Settings/TermsConditionsScreen";

const Stack = createNativeStackNavigator();

export function DefaultHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      {AuthStack()}
    </Stack.Navigator>
  );
}

export function DefaultProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {AuthStack()}
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    </Stack.Navigator>
  );
}

export function DefaultSettingsTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {SettingsStack()}
      {AuthStack()}
    </Stack.Navigator>
  );
}