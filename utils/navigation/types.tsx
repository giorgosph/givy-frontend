import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConfirmationType } from "../constants/data/confirmationTypes";

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

/* ------------------------ Client Tabs ------------------------ */
/* ------------------------------------------------------------- */
export type ClientTabsParamList = {
  ClientHomeTab: undefined;
  ClientSearchTab: undefined;
  ClientProfileTab: undefined;
};

/* ------------------------- Root Tab ------------------------- */
export type RootTabPraramList = DefaultTabsParamList | ClientTabsParamList;


/* ---------------------------------------------------------------------------- */
/* -------------------------------- Tab Stacks -------------------------------- */
/* ---------------------------------------------------------------------------- */

/* ---------------------- Default Home Tab ---------------------- */
/* -------------------------------------------------------------- */
export type DefaultHomeTabParamList = {
  Home: undefined;
};

/* --------------------- Default Profile Tab --------------------- */
/* --------------------------------------------------------------- */
export type DefaultProfileTabParamList = {
  Auth: undefined;
  ForgotPassword: undefined;
  AccountConfirmation: { type: ConfirmationType };

  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

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

/* ----------------------- Client Home Tab ----------------------- */
/* --------------------------------------------------------------- */
export type ClientHomeTabParamList = {
  Home: undefined;

  FAQ: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Feedback: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;

  AccountConfirmation: { type: ConfirmationType };
};

/* ---------------------- Client Search Tab ---------------------- */
/* --------------------------------------------------------------- */
export type ClientSearchTabParamList = {
  DrawsList: undefined;
  DrawDetails: undefined;

  FAQ: undefined;
  AboutUs: undefined;
  Settings: undefined;
  Feedback: undefined;
  ContactUs: undefined;
  ResetPassword: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
};

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

  DrawDetails: undefined;
  AccountConfirmation: { type: ConfirmationType };
};

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

/* ------------------------------------------------------------------------------- */
/* -------------------------------- Global Stacks -------------------------------- */
/* ------------------------------------------------------------------------------- */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends SettingsStackParamList {}
  }
};