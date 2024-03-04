import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";
import { SettingsScreenProps } from "../../utils/navigation/types";

/* --------- Types --------- */
type PropsType = {
  navigation: SettingsScreenProps["navigation"];
  logout: () => void;
};

/* ------------------------- */

const TopClientSettings = ({ navigation, logout }: PropsType) => {
  return (
    <View>
      <SettingButton
        title="Reset Password"
        onPress={() => navigation.navigate("ResetPassword")}
      />
      <SettingButton
        title="Sign Out"
        backgroundColor="#C05D5D"
        onPress={logout}
      />
    </View>
  );
};

export default TopClientSettings;
