import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import AnimatedBorder from "../style/AnimatedBorder";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import CustomCountdown from "../general/CustomCountdown";
import InnerShadow from "../style/InnerShadow";

/* ----- Types ----- */
type PropsType = {};

/* ----------------- */

const UpcomingDraw = () => {
  return (
    <AnimatedBorder style={styles.container}>
      <InnerShadow
        width={325}
        height={140}
        borderRadius={PIXELS * 2}
        color="rgb(197, 175, 155)"
        style={styles.wrap}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Maniac Raffle</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomCountdown
            timeRemaining={{
              days: 24,
              hours: 10,
              minutes: 21,
              seconds: 33,
              expired: false,
            }}
            border
          />
        </View>
      </InnerShadow>
    </AnimatedBorder>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 140,
    marginVertical: PIXELS * 2,
    backgroundColor: "#C5AF9B",
    shadowColor: "#D1B6B6",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 12,
      },
      android: {
        elevation: 12,
      },
    }),
    borderRadius: PIXELS * 2,
  },
  wrap: {
    justifyContent: "flex-start",
  },
  titleContainer: {
    marginBottom: PIXELS / 4,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    color: "#4D0808",
  },
});

export default UpcomingDraw;
