import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import MyChatsScreen from "../../../screens/Message/MyChatsScreen";
import UserChatScreen from "../../../screens/Message/UserChatScreen";

export function MessageStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="MyChats" component={MyChatsScreen} />
      <Stack.Screen name="UserChat" component={UserChatScreen} />
    </Stack.Group>
  );
}