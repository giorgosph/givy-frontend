import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../../../screens/Auth/AuthScreen";
import ForgotPasswordScreen from "../../../screens/Auth/ForgotPasswordScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Group>
  );
}