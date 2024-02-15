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
        width={323}
        height={138}
        borderRadius={PIXELS * 2}
        color="rgb(211, 189, 179)"
        style={styles.wrap}
        border
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Maniac Raffle</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomCountdown
            timeRemaining={{
              days: 1,
              hours: 10,
              minutes: 21,
              seconds: 33,
              expired: false,
            }}
          />
        </View>
        <View style={styles.textParentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.drawInfoTitle}>Total Raffle Value</Text>
            <Text style={styles.drawInfoText}>£1 250</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.drawInfoTitle}>Most Valuable Item</Text>
            <Text style={styles.drawInfoText}>Iphone 30 Pro</Text>
          </View>
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
    backgroundColor: "rgb(211, 189, 179)",
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
    fontWeight: "900",
    textShadowColor: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: "#4D0808",
  },
  textParentContainer: {
    width: "100%",
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    padding: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  drawInfoTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#270404",
  },
  drawInfoText: {
    width: "100%",
    height: "80%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#592525",
    textShadowColor: "rgba(39, 4, 4, 0.55)",
    textShadowRadius: 12,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default UpcomingDraw;
