import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { DrawType } from "../types/objectTypes";
import { ConfirmationType } from "../constants/data/confirmationTypes";
import { CompositeScreenProps } from "@react-navigation/native";

/* ---------------------------------------------------------------------------- */
/* ----------------------------------- Tabs ----------------------------------- */
/* ---------------------------------------------------------------------------- */

/* ----------------------- Default Tabs ----------------------- */
/* ------------------------------------------------------------ */
export type DefaultTabsParamList = {
  DefaultHomeTab: undefined;
  DefaultProfileTab: undefined;
  DefaultSettingsTab: undefined;
};

export type DefaultHomeTabProps = BottomTabScreenProps<DefaultTabsParamList, "DefaultHomeTab">;
export type DefaultProfileTabProps = BottomTabScreenProps<DefaultTabsParamList, "DefaultProfileTab">;
export type DefaultSettingsTabProps = BottomTabScreenProps<DefaultTabsParamList, "DefaultSettingsTab">;

/* ------------------------ Client Tabs ------------------------ */
/* ------------------------------------------------------------- */
export type ClientTabsParamList = {
  ClientHomeTab: undefined;
  ClientSearchTab: undefined;
  ClientProfileTab: undefined;
};

export type ClientHomeTabProps = BottomTabScreenProps<ClientTabsParamList, "ClientHomeTab">;
export type ClientSearchTabProps = BottomTabScreenProps<ClientTabsParamList, "ClientSearchTab">;
export type ClientProfileTabProps = BottomTabScreenProps<ClientTabsParamList, "ClientProfileTab">;

/* ------------------------- Root Tab ------------------------- */
export type RootTabPraramList = DefaultTabsParamList | ClientTabsParamList;


/* ---------------------------------------------------------------------------- */
/* -------------------------------- Tab Stacks -------------------------------- */
/* ---------------------------------------------------------------------------- */

/* ---------------------- Default Home Tab ---------------------- */
/* -------------------------------------------------------------- */
export type DefaultHomeTabParamList = {
  DefaultHome: undefined;
};

export type DefaultHomeScreenProps = NativeStackScreenProps<DefaultHomeTabParamList, "DefaultHome">;

/* --------------------- Default Profile Tab --------------------- */
/* --------------------------------------------------------------- */
export type DefaultProfileTabParamList = {
  Auth: undefined;
  ForgotPassword: undefined;
  AccountConfirmation: { type: ConfirmationType };

  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

export type DefaultProfileAuthScreenProps = NativeStackScreenProps<DefaultProfileTabParamList, "Auth">;
export type DefaultProfileForgotPasswordScreenProps = NativeStackScreenProps<DefaultProfileTabParamList, "ForgotPassword">;
export type DefaultProfileAccountConfirmationScreenProps = NativeStackScreenProps<DefaultProfileTabParamList, "AccountConfirmation">;
export type DefaultProfilePrivacyPolicyScreenProps = NativeStackScreenProps<DefaultProfileTabParamList, "PrivacyPolicy">;
export type DefaultProfileTermsConditionsScreenProps = NativeStackScreenProps<DefaultProfileTabParamList, "TermsConditions">;

/* --------------------- Default Settings Tab --------------------- */
/* ---------------------------------------------------------------- */
export type DefaultSettingsTabParamList = {
  FAQ: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Feedback: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

export type DefaultSettingsFAQScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "FAQ">;
export type DefaultSettingsAboutUsScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "AboutUs">;
export type DefaultSettingsFeedbackScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "Feedback">;
export type DefaultSettingsSettingsScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "Settings">;
export type DefaultSettingsContactUsScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "ContactUs">;
export type DefaultSettingsResetPasswordScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "ResetPassword">;
export type DefaultSettingsPrivacyPolicyScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "PrivacyPolicy">;
export type DefaultSettingsTermsConditionsScreenProps = NativeStackScreenProps<DefaultSettingsTabParamList, "TermsConditions">;

/* ----------------------- Client Home Tab ----------------------- */
/* --------------------------------------------------------------- */
export type ClientHomeTabParamList = {
  ClientHome: undefined;
  AccountConfirmation: { type: ConfirmationType };
};

export type ClientHomeScreenProps = NativeStackScreenProps<ClientHomeTabParamList, "ClientHome">;
export type ClientHomeAccountConfirmationScreenProps = NativeStackScreenProps<ClientHomeTabParamList, "AccountConfirmation">;

/* ---------------------- Client Search Tab ---------------------- */
/* --------------------------------------------------------------- */
export type ClientSearchTabParamList = {
  DrawsList: undefined;
  DrawDetails: { draw: DrawType };
};

export type ClientSearchDrawsListScreenProps = NativeStackScreenProps<ClientSearchTabParamList, "DrawsList">;
export type ClientSearchDrawDetailsScreenProps = NativeStackScreenProps<ClientSearchTabParamList, "DrawDetails">;

/* --------------------- Client Profile Tab --------------------- */
/* -------------------------------------------------------------- */
export type ClientProfileTabParamList = {
  PersonalDetails: undefined;
  MyDraws: undefined;
  MyWins: undefined;

  FAQ: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Feedback: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;

  DrawDetails: { draw: DrawType };
  AccountConfirmation: { type: ConfirmationType };
};

export type ClientProfilePersonalDetailsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "PersonalDetails">;
export type ClientProfileMyDrawsScreenProps = CompositeScreenProps<NativeStackScreenProps<ClientProfileTabParamList, "MyDraws">, BottomTabScreenProps<ClientTabsParamList, 'ClientProfileTab'>>;
export type ClientProfileMyWinsScreenProps = CompositeScreenProps<NativeStackScreenProps<ClientProfileTabParamList, "MyWins">, BottomTabScreenProps<ClientTabsParamList, 'ClientProfileTab'>>;
export type ClientProfileFAQScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "FAQ">;
export type ClientProfileAboutUsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "AboutUs">;
export type ClientProfileFeedbackScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "Feedback">;
export type ClientProfileSettingsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "Settings">;
export type ClientProfileContactUsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "ContactUs">;
export type ClientProfileResetPasswordScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "ResetPassword">;
export type ClientProfilePrivacyPolicyScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "PrivacyPolicy">;
export type ClientProfileTermsConditionsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "TermsConditions">;
export type ClientProfileDrawDetailsScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "DrawDetails">;
export type ClientProfileAccountConfirmationScreenProps = NativeStackScreenProps<ClientProfileTabParamList, "AccountConfirmation">;

/* ------------------------------------------------------------------------------ */
/* ------------------------------- Generic Stacks ------------------------------- */
/* ------------------------------------------------------------------------------ */

/* -------------------------- Settings Stacks -------------------------- */
/* --------------------------------------------------------------------- */
export type SettingsStackParamList = {
  FAQ: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Feedback: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

export type FAQScreenProps = NativeStackScreenProps<SettingsStackParamList, "FAQ">;
export type AboutUsScreenProps = NativeStackScreenProps<SettingsStackParamList, "AboutUs">;
export type FeedbackScreenProps = NativeStackScreenProps<SettingsStackParamList, "Feedback">;
export type SettingsScreenProps = NativeStackScreenProps<SettingsStackParamList, "Settings">;
export type ContactUsScreenProps = NativeStackScreenProps<SettingsStackParamList, "ContactUs">;
export type ResetPasswordScreenProps = NativeStackScreenProps<SettingsStackParamList, "ResetPassword">;
export type PrivacyPolicyScreenProps = NativeStackScreenProps<SettingsStackParamList, "PrivacyPolicy">;
export type TermsConditionsScreenProps = NativeStackScreenProps<SettingsStackParamList, "TermsConditions">;

/* ------------------------------------------------------------------------------- */
/* -------------------------------- Global Stacks -------------------------------- */
/* ------------------------------------------------------------------------------- */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends SettingsStackParamList {}
  }
};