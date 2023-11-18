import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawsListScreen from "../../../screens/Search/DrawsListScreen";
import DrawDetailsScreen from "../../../screens/Search/DrawDetailsScreen";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="DrawsList" component={DrawsListScreen} />
      <Stack.Screen name="DrawDetails" component={DrawDetailsScreen} />
    </Stack.Group>
  );
}