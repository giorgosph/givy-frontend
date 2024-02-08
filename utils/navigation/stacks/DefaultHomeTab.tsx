import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../../screens/Home/HomeScreen";

import { DefaultHomeTabParamList } from "../types";

const Stack = createNativeStackNavigator<DefaultHomeTabParamList>();

function DefaultHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default DefaultHomeTab;