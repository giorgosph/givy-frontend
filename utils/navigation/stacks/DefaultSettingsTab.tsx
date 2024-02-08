import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FAQScreen from "../../../screens/Settings/FAQScreen";
import AboutUsScreen from "../../../screens/Settings/AboutUsScreen";
import SettingsScreen from "../../../screens/Settings/SettingsScreen";
import FeedbackScreen from "../../../screens/Settings/FeedbackScreen";
import ContactUsScreen from "../../../screens/Settings/ContactUsScreen";
import PrivacyPolicyScreen from "../../../screens/Settings/PrivacyPolicyScreen";
import ResetPasswordScreen from "../../../screens/Settings/ResetPasswordScreen";
import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";

import { DefaultSettingsTabParamList } from "../types";

const Stack = createNativeStackNavigator<DefaultSettingsTabParamList>();

function DefaultSettingsTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    </Stack.Navigator>
  );
};

export default DefaultSettingsTab;