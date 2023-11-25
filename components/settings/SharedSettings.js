import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const SharedSettings = ({ navTo }) => {
  return (
    <>
      <View>
        <SettingButton title="Terms & Conditions" onPress={navTo("TermsConditions")} />
        <SettingButton title="Privacy Policy" onPress={navTo("PrivacyPolicy")} />
      </View>
      <View>
        <SettingButton title="FAQ" onPress={navTo("FAQ")} />
        <SettingButton title="About Us" onPress={navTo("AboutUs")} />
        <SettingButton title="Contact Us" onPress={navTo("ContactUs")} />
      </View>
    </>
  )
};

export default SharedSettings;
