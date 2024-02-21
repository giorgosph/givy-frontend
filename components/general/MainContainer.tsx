import React from "react";
import { View, StyleSheet } from "react-native";

import { BACKGROUND_COLOR } from "../../utils/constants/styles/colors";
import { MAIN_HEIGHT, WIDTH } from "../../utils/constants/styles/dimensions";

/* -------- Types -------- */
type Props = {
  children: React.ReactNode;
  centered?: boolean;
};

/* ----------------------- */

const MainContainer = ({ children, centered = false }: Props) => {
  return (
    <View style={[styles.container, centered && { alignItems: "center" }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    minHeight: MAIN_HEIGHT,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: BACKGROUND_COLOR,
    zIndex: 1,
  },
});

export default MainContainer;
