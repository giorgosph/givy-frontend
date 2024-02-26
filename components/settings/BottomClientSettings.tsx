import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";
import { SettingsScreenProps } from "../../utils/navigation/types";

/* --------- Types --------- */
type PropsType = {
  navigation: SettingsScreenProps["navigation"];
};

/* ------------------------- */

const BottomClientSettings = ({ navigation }: PropsType) => {
  return (
    <View>
      <SettingButton
        title="Leave Us a Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
      <SettingButton
        title="Contact Us"
        onPress={() => navigation.navigate("ContactUs")}
      />
    </View>
  );
};

export default BottomClientSettings;
