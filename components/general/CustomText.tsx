import React from "react";
import { ColorValue, StyleSheet, Text, TextStyle, View } from "react-native";

import CustomTitle from "./CustomTitle";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

/* --------- Types --------- */
type PropsType = {
  text: string;
  size?: 1 | 2 | 3 | 4 | 5;
  color?: ColorValue;
  extraStyles?: TextStyle; 
  title?: string; 
  titleSize?: 1 | 2 | 3 | 4 | 5 | 6;
  titleExtraStyles?: TextStyle;
  horizontal?: boolean;
};

/* ------------------------- */

const CustomText = (props: PropsType) => {
  const { text, size, color, extraStyles, title, titleSize, titleExtraStyles, horizontal } = props;

  let textStyle: TextStyle; 
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
    case 4: 
      textStyle = styles.text4
      break;
    case 5: 
      textStyle = styles.text5
      break;
    default:
      textStyle = styles.text3
      break;
   }

  return (
    <View style={horizontal && {flexDirection: "row"}}>
      {title && 
        <CustomTitle 
          text={title} 
          size={titleSize || 6} 
          extraStyles={titleExtraStyles} /> 
      }
      <Text style={[textStyle, !!color && { color: color }, !!extraStyles && extraStyles]}>{text}</Text>
   </View>
  )
};

const styles = StyleSheet.create({
  text1: {
    paddingLeft: PIXELS / 4,
    fontSize: 16,
    fontWeight: '400',
    color: HEADING_COLOR,
  },
  text2: {
    paddingLeft: PIXELS / 4,
    fontSize: 14,
    fontWeight: '400',
    color: HEADING_COLOR,
  },
  text3: {
    paddingLeft: PIXELS / 4,
    fontSize: 12,
    fontWeight: '300',
    color: HEADING_COLOR,
  },
  text4: {
    paddingLeft: PIXELS / 4,
    fontSize: 11,
    fontWeight: '300',
    color: HEADING_COLOR,
  },
  text5: {
    paddingLeft: PIXELS / 4,
    fontSize: 10,
    fontWeight: '200',
    color: HEADING_COLOR,
  },
});

export default CustomText;
