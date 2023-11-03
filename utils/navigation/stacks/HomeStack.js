import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../../screens/HomeScreen";
import ShopDetailsScreen from "../../../screens/ShopDetailsScreen";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="FeaturedShops" component={FeaturedShopsScreen} /> */}
      <Stack.Screen name="ShopDetails" component={ShopDetailsScreen} />
    </Stack.Group>
  );
}