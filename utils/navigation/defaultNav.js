import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "./stacks/AuthStack";
import { SearchStack } from "./stacks/SearchStack";
import { MessageStack } from "./stacks/MessageStack";
import { SettingsStack } from "./stacks/SettingsStack";

import HomeScreen from "../../screens/Home/HomeScreen";
import PrivacyPolicyScreen from "../../screens/Settings/PrivacyPolicyScreen";
import PersonalDetailsScreen from "../../screens/Profile/PersonalDetailsScreen";
import TermsConditionsScreen from "../../screens/Settings/TermsConditionsScreen";

const Stack = createNativeStackNavigator();

export function HomeTab(authed) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {authed ? SettingsStack() : AuthStack()}
      {!authed && (
        <Stack.Group>
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export function SearchTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {SearchStack()}
      {SettingsStack()}
    </Stack.Navigator>
  );
}

export function ProfileTab(authed) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authed ? 
        <>
          <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
          {SettingsStack()}
        </>
      : (
        <Stack.Group>
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export function MessageTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {MessageStack()}
      {SettingsStack()}
    </Stack.Navigator>
  );
}

export function SettingsTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {SettingsStack()}
      {AuthStack()}
    </Stack.Navigator>
  );
}