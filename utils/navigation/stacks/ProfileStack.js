import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyWins from "../../../screens/Profile/MyWins";
import MyDraws from "../../../screens/Profile/MyDraws";
import PersonalDetailsScreen from "../../../screens/Profile/PersonalDetailsScreen"

const Stack = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      <Stack.Screen name="MyDraws" component={MyDraws} />
      <Stack.Screen name="MyWins" component={MyWins} />
    </Stack.Group>
  );
}