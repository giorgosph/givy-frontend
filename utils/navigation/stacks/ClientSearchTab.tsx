import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawsListScreen from "../../../screens/Search/DrawsListScreen";
import DrawDetailsScreen from "../../../screens/Search/DrawDetailsScreen";

import { ClientSearchTabParamList } from "../types";

const Stack = createNativeStackNavigator<ClientSearchTabParamList>();

function ClientSearchTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawsList" component={DrawsListScreen} />
      <Stack.Screen name="DrawDetails" component={DrawDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ClientSearchTab;