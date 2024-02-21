import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Animated,
  ViewStyle,
  GestureResponderEvent,
  View,
} from "react-native";

/* --------- Types --------- */
type PropsType = {
  title: "Log In" | "Sign Up";
  stylesBorder: ViewStyle[];
  color: Animated.AnimatedInterpolation<string>;
  onPress: (event: GestureResponderEvent) => void;
};

/* ------------------------- */

const AuthScreenNav = (props: PropsType) => {
  const { title, stylesBorder, color, onPress } = props;

  return (
    <View>
      <TouchableWithoutFeedback onPress={onPress}>
        <Animated.View
          style={[styles.navBar, stylesBorder, { backgroundColor: color }]}
        >
          <Text style={styles.navText}>{title}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 45,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default AuthScreenNav;
