import React from "react";
import { StyleSheet, View } from "react-native";

import SettingButton from "./SettingButton";

const SharedSettings = ({ navTo }) => {
  return (
    <>
      <View style={styles.settingWrap} >
        <SettingButton title="Terms & Conditions" onPress={navTo("TermsConditions")} />
        <SettingButton title="Privacy Policy" onPress={navTo("PrivacyPolicy")} />
      </View>
      <View style={styles.settingWrap} >
        <SettingButton title="FAQ" onPress={navTo("FAQ")} />
        <SettingButton title="About Us" onPress={navTo("AboutUs")} />
        <SettingButton title="Contact Us" onPress={navTo("ContactUs")} />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  settingWrap: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 32,
  }
});

export default SharedSettings;
