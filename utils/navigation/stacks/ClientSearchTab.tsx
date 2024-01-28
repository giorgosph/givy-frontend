import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FAQScreen from "../../../screens/Settings/FAQScreen";
import AboutUsScreen from "../../../screens/Settings/AboutUsScreen";
import FeedbackScreen from "../../../screens/Settings/FeedbackScreen";
import SettingsScreen from "../../../screens/Settings/SettingsScreen";
import DrawsListScreen from "../../../screens/Search/DrawsListScreen";
import ContactUsScreen from "../../../screens/Settings/ContactUsScreen";
import DrawDetailsScreen from "../../../screens/Search/DrawDetailsScreen";
import PrivacyPolicyScreen from "../../../screens/Settings/PrivacyPolicyScreen";
import ResetPasswordScreen from "../../../screens/Settings/ResetPasswordScreen";
import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";

import { ClientSearchTabParamList } from "../types";

const Stack = createNativeStackNavigator<ClientSearchTabParamList>();

function ClientSearchTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawsList" component={DrawsListScreen} />
      <Stack.Screen name="DrawDetails" component={DrawDetailsScreen} />
      
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
    </Stack.Navigator>
  );
};

export default ClientSearchTab;