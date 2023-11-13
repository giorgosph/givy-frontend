import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR } from "../../utils/styles/colors";
import { HEADER_HEIGHT, HEADER_PADDING_TOP, PIXELS } from "../../utils/styles/dimensions";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Givy</Text>
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
});

export default Header;