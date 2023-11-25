import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const TopClientSettings = ({ navTo, logout }) => {
  return (
    <View>
      <SettingButton title="Reset Password" onPress={navTo("ResetPassword")} />
      <SettingButton title="Sign Out" onPress={logout} />
    </View>
  )
};

export default TopClientSettings;
