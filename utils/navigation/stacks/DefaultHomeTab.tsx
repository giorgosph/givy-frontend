import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefaultHomeScreen from "../../../screens/Home/DefaultHomeScreen";

import { DefaultHomeTabParamList } from "../types";

const Stack = createNativeStackNavigator<DefaultHomeTabParamList>();

function DefaultHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DefaultHome" component={DefaultHomeScreen} />
    </Stack.Navigator>
  );
};

export default DefaultHomeTab;