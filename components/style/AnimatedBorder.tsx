import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Easing, ViewStyle } from "react-native";
import { BACKGROUND_COLOR } from "../../utils/constants/styles/colors";
import { isAndroid } from "../../utils/constants/device";

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
        duration: 1750,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  };

  const interpolateColors = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["red", BACKGROUND_COLOR, "red"],
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
    borderWidth: 2,
    alignSelf: "center",
    overflow: "hidden",
    position: "relative",
  },
  androidShadow: {
    elevation: 60,
  },
  iosShadow: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
  },
});

export default AnimatedBorder;
