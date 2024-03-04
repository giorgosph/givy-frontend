import React from "react";
import { Text, StyleSheet, ColorValue, TextStyle } from "react-native";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

/* --------- Types --------- */
type PropsType = {
  text: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: ColorValue;
  lowercase?: boolean;
  extraStyles?: TextStyle;
};

/* ------------------------- */

const CustomTitle = (props: PropsType) => {
  const { text, size, color, lowercase, extraStyles } = props;

  let titleStyle: TextStyle;

  switch (size) {
    case 1:
      titleStyle = styles.title1;
      break;
    case 2:
      titleStyle = styles.title2;
      break;
    case 3:
      titleStyle = styles.title3;
      break;
    case 4:
      titleStyle = styles.title4;
      break;
    case 5:
      titleStyle = styles.title5;
      break;
    case 6:
      titleStyle = styles.title6;
      break;
    default:
      titleStyle = styles.title2;
      break;
  }

  return (
    <Text
      style={[
        titleStyle,
        !!color && { color: color },
        lowercase && { textTransform: "lowercase" },
        !!extraStyles && extraStyles,
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontSize: 26,
    fontWeight: "800",
    color: HEADING_COLOR,
  },
  title2: {
    fontSize: 24,
    fontWeight: "700",
    color: HEADING_COLOR,
  },
  title3: {
    fontSize: 22,
    fontWeight: "700",
    color: HEADING_COLOR,
  },
  title4: {
    fontSize: 18,
    fontWeight: "600",
    color: HEADING_COLOR,
  },
  title5: {
    fontSize: 16,
    fontWeight: "500",
    color: HEADING_COLOR,
  },
  title6: {
    fontSize: 14,
    fontWeight: "400",
    color: HEADING_COLOR,
  },
});

export default CustomTitle;
