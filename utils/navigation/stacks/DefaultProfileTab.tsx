import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../../../screens/Auth/AuthScreen";
import ForgotPasswordScreen from "../../../screens/Auth/ForgotPasswordScreen";
import PrivacyPolicyScreen from "../../../screens/Settings/PrivacyPolicyScreen";
import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

import { DefaultProfileTabParamList } from "../types";

const Stack = createNativeStackNavigator<DefaultProfileTabParamList>();

function DefaultProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />

      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    </Stack.Navigator>
  );
};

export default DefaultProfileTab;