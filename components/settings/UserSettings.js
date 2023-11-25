import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const UserSettings = ({ navTo }) => {
  return (
    <View>
      <SettingButton title="Log In/Sign Up" onPress={navTo("Auth")} />
    </View>
  )
};

export default UserSettings;
