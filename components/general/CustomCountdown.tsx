import React from "react";
import { StyleSheet, Text } from "react-native";
import { CountdownTimeType } from "../../utils/types/objectTypes";

/* ------- Types -------*/
type PropsType = {
  timeRemaining: CountdownTimeType;
};

/* ---------------------*/

const CustomCountdown = (props: PropsType) => {
  const { timeRemaining } = props;
  
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
