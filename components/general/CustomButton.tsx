import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";

import {
  BACKGROUND_COLOR,
  BUTTON_COLOR,
} from "../../utils/constants/styles/colors";
import {
  BUTTON_HEIGHT,
  BUTTON_WIDTH,
  PIXELS,
} from "../../utils/constants/styles/dimensions";

/* --------- Types --------- */
type PropsType = {
  title: string;
  onPress: (e: GestureResponderEvent) => any;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

/* ------------------------- */

const CustomButton = (props: PropsType) => {
  const { title, onPress, disabled = false, style, textStyle } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, { opacity: disabled ? 0.4 : 1 }, !!style && style]}
    >
      <Text style={[styles.text, !!textStyle && textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    margin: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BUTTON_COLOR,
    borderRadius: PIXELS,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: BACKGROUND_COLOR,
    textTransform: "capitalize",
  },
});

export default CustomButton;
