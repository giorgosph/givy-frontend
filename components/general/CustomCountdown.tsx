import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { CountdownTimeType } from "../../utils/types/objectTypes";
import InnerShadow from "../style/InnerShadow";

/* ------- Types -------*/
type PropsType = {
  timeRemaining: CountdownTimeType;
  border?: boolean;
};

/* ---------------------*/

const CustomCountdown = (props: PropsType) => {
  const { timeRemaining, border = false } = props;

  const renderDigits = (value: number) => {
    const digits = value.toString().padStart(2, "0").split("");
    return digits.map((digit, index) => (
      <InnerShadow
        key={index}
        width={32}
        height={40}
        color="rgb(217, 217, 217)"
        borderRadius={8}
        border={border}
      >
        <Text style={styles.digitText}>{digit}</Text>
      </InnerShadow>
    ));
  };

  return (
    <View style={styles.container}>
      {!!timeRemaining.days && (
        <>
          {renderDigits(timeRemaining.days)}
          <Text style={styles.separator}>:</Text>
        </>
      )}
      {renderDigits(timeRemaining.hours)}
      <Text style={styles.separator}>:</Text>
      {renderDigits(timeRemaining.minutes)}
      <Text style={styles.separator}>:</Text>
      {renderDigits(timeRemaining.seconds)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  digitText: {
    color: "#362424",
    fontSize: 16,
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  separator: {
    color: "white",
    fontSize: 18,
    textShadowColor: "black",
    textShadowRadius: 1,
  },
});

export default CustomCountdown;
