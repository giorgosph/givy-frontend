import React from "react";
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
  ColorValue,
} from "react-native";

import ArrowIcon from "../icons/ArrowIcon";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  SETTING_BUTTON_COLOR,
  SETTING_BUTTON_TEXT_COLOR,
} from "../../utils/constants/styles/colors";

/* --------- Types --------- */
type PropsType = {
  title: string;
  backgroundColor?: ColorValue;
  onPress: () => void;
};

/* ------------------------- */

const SettingButton = (props: PropsType) => {
  const { title, backgroundColor, onPress } = props;

  return (
    <TouchableHighlight
      style={[
        styles.buttonWrap,
        { backgroundColor: backgroundColor || SETTING_BUTTON_COLOR },
      ]}
      underlayColor="#592E2E"
      onPress={onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.buttonIcon}>
          <ArrowIcon color={SETTING_BUTTON_TEXT_COLOR} direction="F" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonWrap: {
    width: 288,
    height: 48,
    margin: PIXELS / 4,
    borderRadius: 16,
  },
  button: {
    width: "100%",
    height: "100%",
    margin: 0,
    paddingHorizontal: PIXELS * 1.5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    flex: 8,
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    color: SETTING_BUTTON_TEXT_COLOR,
  },
  buttonIcon: {
    flex: 1,
  },
});

export default SettingButton;
