import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const BottomClientSettings = ({ navTo }) => {
  return (
    <View>
      <SettingButton title="Leave Us a Feedback" onPress={navTo("Feedback")} />
    </View>
  )
};

export default BottomClientSettings;
