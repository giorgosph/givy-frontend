import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../../../screens/Auth/AuthScreen";
// import ResetPasswordScreen from "../../../screens/ResetPasswordScreen";
import ForgotPasswordScreen from "../../../screens/Auth/ForgotPasswordScreen";
// import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Group>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      {/* <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} /> */}
      {/* ResetPass must be in settings */}
      {/* <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} initialParams={{ fpass: false }} /> */}
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Group>
  );
}