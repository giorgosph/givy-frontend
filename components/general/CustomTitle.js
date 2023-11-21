import React from "react";
import { Text, StyleSheet } from "react-native";

import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const CustomTitle = ({ text, size, color, lowercase, extraStyles }) => {
  let titleStyle; 
  switch (size) {
    case 1:
      titleStyle = styles.title1
      break;
    case 2: 
      titleStyle = styles.title2
      break;
    case 3: 
      titleStyle = styles.title3
      break;
    case 4: 
      titleStyle = styles.title4
      break;
    case 5: 
      titleStyle = styles.title5
      break;
    default:
      titleStyle = styles.title2
      break;
   }

  return (
   <Text 
    style={[
      titleStyle, 
      color && {color: color},
      lowercase && {textTransform: 'lowercase'},
      extraStyles && extraStyles,
    ]}
   >{text}</Text>
  )
};

const styles = StyleSheet.create({
  title1: {
    fontSize: 26,
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  title2: {
    fontSize: 24,
    fontWeight: '700',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  title3: {
    fontSize: 22,
    fontWeight: '700',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  title4: {
    fontSize: 18,
    fontWeight: '600',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  title5: {
    fontSize: 16,
    fontWeight: '600',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
});

export default CustomTitle;
