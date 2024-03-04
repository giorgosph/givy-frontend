import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import SettingIcon from "../icons/SettingsIcon";
import {
  HEADER_HEIGHT,
  ICON_SIZE,
  PIXELS,
} from "../../utils/constants/styles/dimensions";
import {
  ACTIVE_ICON_COLOR,
  HEADER_BG_COLOR,
  HEADER_TITLE_COLOR,
  INACTIVE_ICON_COLOR,
} from "../../utils/constants/styles/colors";

/* ---------- Types ---------- */
type HeaderProps = {
  inSettings?: boolean;
  showSettings?: boolean;
};

/* --------------------------- */

const Header = (props: HeaderProps) => {
  const { showSettings = false, inSettings = false } = props;
  const navigation = useNavigation();

  const handleSettingsPress = () =>
    inSettings ? navigation.goBack() : navigation.navigate("Settings");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Givy</Text>
      {showSettings && (
        <View style={styles.iconWrap}>
          <TouchableWithoutFeedback onPress={handleSettingsPress}>
            <View style={styles.touchableView}>
              <SettingIcon
                color={inSettings ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEADER_HEIGHT,
    paddingBottom: PIXELS / 4,
    paddingHorizontal: PIXELS * 1.75,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: HEADER_BG_COLOR,
    zIndex: 5,
  },
  title: {
    color: HEADER_TITLE_COLOR,
    fontSize: 26,
    fontWeight: "800",
  },
  iconWrap: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
  touchableView: {
    width: "100%",
    height: "100%",
    padding: PIXELS * 1.15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6D2121",
    borderRadius: ICON_SIZE,
  },
});

export default Header;
