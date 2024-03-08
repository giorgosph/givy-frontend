import { Platform } from "react-native";
import * as Device from "expo-device";

export const isAndroid = Platform.OS === "android";
export const isIOS = Platform.OS === "ios";

export const isDevice = Device.isDevice;
