import React from "react";
import { StyleSheet, View } from "react-native";

import SettingButton from "./SettingButton";

const BottomClientSettings = ({ navTo }) => {
  return (
    <View style={styles.settingWrap} >
      <SettingButton title="Leave Us a Feedback" onPress={navTo("Leave Feedback")} />
      <SettingButton title="Unsubscribe" onPress={navTo("Unsubscribe")} />
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

export default BottomClientSettings;
