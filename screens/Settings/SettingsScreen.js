import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";
import SettingButton from "../../components/settings/SettingButton";

const SettingsScreen = ({ navigation }) => {
  const navTo = (screen) => () => navigation.navigate(screen);

  return (
   <>
    <Header />
    <MainContainer>
      <View style={styles.settingWrap} >
        <SettingButton title="Log In/Sign Up" onPress={navTo("Auth")} />
      </View>
      <View style={styles.settingWrap} >
        <SettingButton title="Terms & Conditions" onPress={navTo("TermsConditions")} />
        <SettingButton title="Privacy Policy" onPress={navTo("PrivacyPolicy")} />
      </View>
      <View style={styles.settingWrap} >
        <SettingButton title="FAQ" onPress={navTo("FAQ")} />
        <SettingButton title="About Us" onPress={navTo("AboutUs")} />
        <SettingButton title="Contact Us" onPress={navTo("ContactUs")} />
      </View>
    </MainContainer>
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

export default SettingsScreen;
