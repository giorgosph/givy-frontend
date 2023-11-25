import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const BottomClientSettings = ({ navTo }) => {
  return (
    <View>
      <SettingButton title="Leave Us a Feedback" onPress={navTo("Leave Feedback")} />
      <SettingButton title="Unsubscribe" onPress={navTo("Unsubscribe")} />
    </View>
  )
};

export default BottomClientSettings;
