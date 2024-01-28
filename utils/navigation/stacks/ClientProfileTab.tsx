import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FAQScreen from "../../../screens/Settings/FAQScreen";
import MyWinsScreen from "../../../screens/Profile/MyWinsScreen";
import MyDrawsScreen from "../../../screens/Profile/MyDrawsScreen";
import AboutUsScreen from "../../../screens/Settings/AboutUsScreen";
import FeedbackScreen from "../../../screens/Settings/FeedbackScreen";
import SettingsScreen from "../../../screens/Settings/SettingsScreen";
import ContactUsScreen from "../../../screens/Settings/ContactUsScreen";
import DrawDetailsScreen from "../../../screens/Search/DrawDetailsScreen";
import PrivacyPolicyScreen from "../../../screens/Settings/PrivacyPolicyScreen";
import ResetPasswordScreen from "../../../screens/Settings/ResetPasswordScreen";
import PersonalDetailsScreen from "../../../screens/Profile/PersonalDetailsScreen";
import TermsConditionsScreen from "../../../screens/Settings/TermsConditionsScreen";
import AccountConfirmationScreen from "../../../screens/Auth/AccountConfirmationScreen";

import { ClientProfileTabParamList } from "../types";

const Stack = createNativeStackNavigator<ClientProfileTabParamList>();

function ClientProfileTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
      <Stack.Screen name="MyDraws" component={MyDrawsScreen} />
      <Stack.Screen name="MyWins" component={MyWinsScreen} />

      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
      
      <Stack.Screen name="DrawDetails" component={DrawDetailsScreen} />
      <Stack.Screen name="AccountConfirmation" component={AccountConfirmationScreen} />
    </Stack.Navigator>
  );
};

export default ClientProfileTab;