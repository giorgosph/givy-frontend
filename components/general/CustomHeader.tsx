import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, GestureResponderEvent } from "react-native";

import ArrowIcon from "../icons/ArrowIcon";
import { useNavigation } from "@react-navigation/native";

import { HEADER_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";
import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR, HEADER_BG_COLOR, HEADER_TITLE_COLOR, SETTING_BUTTON_TEXT_COLOR } from "../../utils/constants/styles/colors";
import CustomTitle from "./CustomTitle";

/* --------- Types --------- */
type PropsType = {
  title: string; 
  onPress?: (e: GestureResponderEvent) => void;
};

/* ------------------------- */

const CustomHeader = (props: PropsType) => {
  const { title, onPress } = props;

  const navigation = useNavigation();
  const back = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <TouchableWithoutFeedback onPress={onPress || back}>
          <View style={styles.touchableView}>
            <ArrowIcon color={SETTING_BUTTON_TEXT_COLOR} size={24} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <CustomTitle text={title} size={3} extraStyles={{ color: HEADER_TITLE_COLOR }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    paddingBottom: PIXELS / 4,
    paddingHorizontal: PIXELS * 2,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: HEADER_BG_COLOR,
    zIndex: 5,
  },
  title: {
    color: HEADER_TITLE_COLOR,
    fontSize: 26,
    fontWeight: '800',
    justifyContent: 'center',
    textAlign: 'center',
  },
  iconWrap: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: HEADER_HEIGHT / 2 - PIXELS,
    left: PIXELS / 2,
  },
  touchableView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
