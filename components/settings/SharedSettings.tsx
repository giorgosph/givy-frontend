import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";
import { SettingsScreenProps } from "../../utils/navigation/types";

/* --------- Types --------- */
type PropsType = {
  navigation: SettingsScreenProps["navigation"];
};

/* ------------------------- */

const SharedSettings = ({ navigation }: PropsType) => {
  return (
    <>
      <View>
        <SettingButton
          title="Terms & Conditions"
          onPress={() => navigation.navigate("TermsConditions")}
        />
        <SettingButton
          title="Privacy Policy"
          onPress={() => navigation.navigate("PrivacyPolicy")}
        />
      </View>
      <View>
        <SettingButton title="FAQ" onPress={() => navigation.navigate("FAQ")} />
        <SettingButton
          title="About Us"
          onPress={() => navigation.navigate("AboutUs")}
        />
      </View>
    </>
  );
};

export default SharedSettings;
