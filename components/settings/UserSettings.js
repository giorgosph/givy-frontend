import React from "react";
import { View } from "react-native";

import SettingButton from "./SettingButton";

const UserSettings = ({ navTo }) => {
  return (
   <>
      <View style={styles.settingWrap} >
        <SettingButton title="Log In/Sign Up" onPress={navTo("Auth")} />
      </View>
   </>
  )
};

const styles = StyleSheet.create({
  settingWrap: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 32,
  }
});

export default UserSettings;
