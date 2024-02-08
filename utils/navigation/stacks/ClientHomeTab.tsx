import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../../screens/Home/HomeScreen";
import FAQScreen from "../../../screens/Settings/FAQScreen";
import AboutUsScreen from "../../../screens/Settings/AboutUsScreen";
import FeedbackScreen from "../../../screens/Settings/FeedbackScreen";
import SettingsScreen from "../../../screens/Settings/SettingsScreen";
import ContactUsScreen from "../../../screens/Settings/ContactUsScreen";
import PrivacyPolicyScreen from "../../../screens/Settings/PrivacyPolicyScreen";
import ResetPasswordScreen from "../../../screens/Settings/ResetPasswordScreen";
import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

import { ClientHomeTabParamList } from "../types";

const Stack = createNativeStackNavigator<ClientHomeTabParamList>();

function ClientHomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default ClientHomeTab;