import React from "react";
import { View, StyleSheet } from "react-native";

import { MAIN_HEIGHT, PIXELS, WIDTH } from "../../utils/styles/dimensions";
import { BACKGROUND_COLOR } from "../../utils/styles/colors";

const MainContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: MAIN_HEIGHT,
    paddingHorizontal: PIXELS,
    backgroundColor: BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'auto',
    overflowY: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
});

export default MainContainer;