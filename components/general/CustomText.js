import React from "react";
import { StyleSheet, Text } from "react-native";

import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const CustomText = ({ text, size, color, extraStyles }) => {
  let textStyle; 
  switch (size) {
    case 1:
      textStyle = styles.text1
      break;
    case 2: 
      textStyle = styles.text2
      break;
    case 3: 
      textStyle = styles.text3
      break;
    default:
      textStyle = styles.text2
      break;
   }

  return (
   <Text 
    style={[
      textStyle, 
      color && {color: color},
      extraStyles && extraStyles,
    ]}
   >{text}</Text>
  )
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    fontWeight: '400',
    color: HEADING_COLOR,
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    color: HEADING_COLOR,
  },
  text3: {
    fontSize: 12,
    fontWeight: '300',
    color: HEADING_COLOR,
  },
});

export default CustomText;
