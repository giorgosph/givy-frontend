import React from "react";
import { View, StyleSheet } from "react-native";
import { HEIGHT, PIXELS, WIDTH } from "../../utils/styles/dimensions";
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
    height: HEIGHT - PIXELS * 7.25,
    paddingHorizontal: PIXELS,
    backgroundColor: BACKGROUND_COLOR,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    zIndex: 1,
  },
});

export default MainContainer;