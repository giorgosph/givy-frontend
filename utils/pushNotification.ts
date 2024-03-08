import * as Notifications from "expo-notifications";

import log from "./logger";
import { fetchAxios } from "./APIs/axios";
import { isAndroid, isDevice } from "./constants/device";
import { PUSH_EP, PUSH_SIGN_TOKEN_EP } from "./constants/url";

/**
 * Sends push notification to the current device.
 * Currently used only for testing purposes.
 */
export const sendPushNotification = async () => {
  const pushToken = (await Notifications.getDevicePushTokenAsync()).data;

  try {
    const response = await fetchAxios({
      type: "post",
      endpoint: PUSH_EP,
      body: pushToken,
    });

    console.log("Push notification sent successfully:\n", response);
  } catch (err) {
    console.error("Error sending Push Notification:\n", err);
  }
};

/**
 * Chacks/Asks for Push Notification permissions.
 * Sets the Push Notification configurations.
 */
export const registerForPushNotifications = async (authToken: string) => {
  if (isAndroid)
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });

  if (!isDevice) {
    log({
      type: "w",
      message: "Must use physical device for Push Notifications!",
    });
    return;
  }

  // Chack/Ask for permissions
  const { status: currStatus } = await Notifications.getPermissionsAsync();
  if (currStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      log({
        type: "w",
        message: "Failed to get Push Token for Notifications!",
      });

      return;
    }
  }

  // Configurations
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  try {
    // Get Push Token
    const pushToken = (await Notifications.getDevicePushTokenAsync()).data;

    fetchAxios({
      type: "post",
      endpoint: PUSH_SIGN_TOKEN_EP,
      body: { pushToken },
      token: authToken,
    });
  } catch (err) {
    log({
      type: "w",
      message: `Error to register for Push Notifications:\n${err}`,
    });
  }
};
