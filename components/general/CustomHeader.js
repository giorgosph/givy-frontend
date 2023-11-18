import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

import ArrowIcon from "../icons/ArrowIcon";

import { HEADER_HEIGHT } from "../../utils/constants/styles/dimensions";
import { ACTIVE_ICON_COLOR, SETTING_BUTTON_TEXT_COLOR } from "../../utils/constants/styles/colors";

const CustomHeader = ({ title, navigation }) => {
  const back = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <TouchableWithoutFeedback onPress={back}>
          <View style={styles.touchableView}>
            <ArrowIcon color={SETTING_BUTTON_TEXT_COLOR} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconWrap}></View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    paddingHorizontal: PIXELS * 2,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    zIndex: 5,
  },
  title: {
    color: ACTIVE_ICON_COLOR,
    fontSize: 30,
    fontWeight: '800',
    justifyContent: 'center',
    textAlign: 'center',
  },
  iconWrap: {
    width: 32,
    height: 32,
  },
  touchableView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
