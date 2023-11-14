import React from "react";
import { View, StyleSheet } from "react-native";

import { BACKGROUND_COLOR } from "../../utils/styles/colors";
import { MAIN_HEIGHT, WIDTH } from "../../utils/styles/dimensions";

const MainContainer = ({ children, centered }) => {
  return (
    <View style={[styles.container, {alignItems: centered && 'center'}]}>
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