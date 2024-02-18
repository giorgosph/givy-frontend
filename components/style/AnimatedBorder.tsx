import React, { useState, useEffect } from "react";
import { StyleSheet, Animated, Easing, ViewStyle } from "react-native";

import { isAndroid } from "../../utils/constants/device";
import { BACKGROUND_COLOR } from "../../utils/constants/styles/colors";
import { BEST_DRAW_BORDER_WIDTH } from "../../utils/constants/styles/dimensions";

/* ----- Types ----- */
type PropsType = {
  children: React.ReactNode;
  style?: ViewStyle;
};

/* ----------------- */

const AnimatedBorder = (props: PropsType) => {
  const { children, style } = props;

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();

    return () => animation.stopAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  const interpolateColors = animation.interpolate({
    inputRange: [0, 0.125, 0.25, 0.5, 0.75, 0.875, 1],
    outputRange: [
      "white",
      "#EE67B0",
      "#9956EE",
      BACKGROUND_COLOR,
      "#9956EE",
      "#EE67B0",
      "white",
    ],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          borderColor: interpolateColors,
          shadowColor: interpolateColors,
        },
        isAndroid ? styles.androidShadow : styles.iosShadow,
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: BEST_DRAW_BORDER_WIDTH,
    alignSelf: "center",
    overflow: "hidden",
    position: "relative",
  },
  androidShadow: {
    elevation: 20,
  },
  iosShadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
  },
});

export default AnimatedBorder;
