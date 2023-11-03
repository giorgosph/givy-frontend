import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import SearchScreen from "../../../screens/Search/SearchScreen";
import UserListingScreen from "../../../screens/Search/UserListingScreen";

export function SearchStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="UserListing" component={UserListingScreen} />
      {/* Will need to navigate to MessageTab */}
    </Stack.Group>
  );
}