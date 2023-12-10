import React from "react";
import { View, StyleSheet } from "react-native";

import { BACKGROUND_COLOR } from "../../utils/constants/styles/colors";
import { HEADER_HEIGHT, MAIN_FULL_HEIGHT, MAIN_HEIGHT, WIDTH } from "../../utils/constants/styles/dimensions";

const MainContainer = ({ children, centered, fullHeight}) => {
  return (
    <View style={[styles.container, centered && { alignItems: 'center' }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: MAIN_HEIGHT,
    backgroundColor: BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
});

export default MainContainer;