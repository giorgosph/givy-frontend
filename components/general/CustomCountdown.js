import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomCountdown = ({ timeRemaining }) => {

  return (
    <Text style={[styles.text, { backgroundColor: timeRemaining.closingSoon ? 'red' : 'transparent' }]}>
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  }
});

export default CustomCountdown;
