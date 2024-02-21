import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

import { DefaultSettingsTabProps } from "../../utils/navigation/types";

/* --------- Types --------- */
type PropsType = {
  navigation: DefaultSettingsTabProps["navigation"];
};

/* ------------------------- */

const UserSettings = ({ navigation }: PropsType) => {
  return (
    <View>
      <SettingButton
        title="Log In/Sign Up"
        onPress={() => navigation.navigate("DefaultProfileTab")}
      />
    </View>
  );
};

export default UserSettings;
