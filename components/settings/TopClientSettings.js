import React from "react";
import { StyleSheet, View } from "react-native";

import SettingButton from "./SettingButton";

const TopClientSettings = ({ navTo, logout }) => {
  return (
    <View style={styles.settingWrap} >
      <SettingButton title="Reset Password" onPress={navTo("ResetPassword")} />
      <SettingButton title="Sign Out" onPress={logout} />
    </View>
  )
};

const styles = StyleSheet.create({
  settingWrap: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 32,
  }
});

export default TopClientSettings;