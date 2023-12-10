import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyWinsScreen from "../../../screens/Profile/MyWinsScreen";
import MyDrawsScreen from "../../../screens/Profile/MyDrawsScreen";
import PersonalDetailsScreen from "../../../screens/Profile/PersonalDetailsScreen"

const Stack = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      <Stack.Screen name="MyDraws" component={MyDrawsScreen} />
      <Stack.Screen name="MyWins" component={MyWinsScreen} />
    </Stack.Group>
  );
}