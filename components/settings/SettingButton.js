import React from "react";
import { Button } from "react-native";

const SettingButton = ({ title, onPress }) => {
  return (
   <Button onPress={onPress}>{title}</Button>
  )
};

export default SettingButton;
