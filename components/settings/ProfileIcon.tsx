import React, { ReactNode } from "react";
import { View, TouchableOpacity, Linking, Alert } from "react-native";

/* ----- Types ----- */
type PropsType = {
  url: string;
  children: ReactNode;
};

/* ----------------- */

const ProfileIcon = (props: PropsType) => {
  const { url, children } = props;

  const handlePress = async () => {
    const permissionGranted = await askPermission();

    console.log("Pressss");

    if (permissionGranted) {
      Linking.openURL(url).catch((err) =>
        console.error("An error occurred", err)
      );
    } else {
      Alert.alert(
        "Permission Denied",
        "You have denied permission to open this link."
      );
    }
  };

  const askPermission = async () => {
    return new Promise((resolve) => {
      Alert.alert(
        "Permission Required",
        "We are asking for permission to open this link",
        [
          {
            text: "Cancel",
            onPress: () => resolve(false),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => resolve(true),
          },
        ],
        { cancelable: false }
      );
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>
    </View>
  );
};

export default ProfileIcon;
