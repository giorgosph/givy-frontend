import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { AuthContext } from "../../context/store";

import SettingIcon from "../icons/SettingsIcon";
import { HEADER_HEIGHT, ICON_SIZE, PIXELS } from "../../utils/constants/styles/dimensions";
import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR, INACTIVE_ICON_COLOR } from "../../utils/constants/styles/colors";

const Header = ({ inSettings }) => {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSettingsPress = () => inSettings ? navigation.goBack() : navigation.navigate('Settings');
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Givy</Text>
      {authCtx.isAuthenticated && (
        <View style={styles.iconWrap}>
          <TouchableWithoutFeedback onPress={handleSettingsPress}>
            <View style={styles.touchableView}>
              <SettingIcon color={inSettings ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    paddingHorizontal: PIXELS * 2,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR,
    zIndex: 5,
  },
  title: {
    color: ACTIVE_ICON_COLOR,
    fontSize: 30,
    fontWeight: '800',
  },
  iconWrap: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
  touchableView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;