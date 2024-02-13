import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ClientHomeScreen from "../../../screens/Home/ClientHomeScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

import { ClientHomeTabParamList } from "../types";

const Stack = createNativeStackNavigator<ClientHomeTabParamList>();

function ClientHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientHome" component={ClientHomeScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default ClientHomeTab;