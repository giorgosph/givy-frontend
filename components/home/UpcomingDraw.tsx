import React from "react";
import { View, Text, StyleSheet } from "react-native";

import InnerShadow from "../style/InnerShadow";
import AnimatedBorder from "../style/AnimatedBorder";
import CustomCountdown from "../general/CustomCountdown";

import {
  BORDER_WIDTH_BEST_DRAW,
  PIXELS,
} from "../../utils/constants/styles/dimensions";

import useUpcomingDraw from "../../hooks/components/useUpcomingDraw";

const width = 325;
const height = 160;

const UpcomingDraw = () => {
  const {
    state,
    bestDraw: draw,
    bestItem: item,
    timeRemaining,
  } = useUpcomingDraw();

  return !!draw && !!item ? (
    <AnimatedBorder style={styles.container}>
      <InnerShadow
        width={width - BORDER_WIDTH_BEST_DRAW * 2}
        height={height - BORDER_WIDTH_BEST_DRAW * 2}
        borderRadius={PIXELS * 2}
        color="rgb(211, 189, 179)"
        style={styles.wrap}
        border
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{draw.title}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <CustomCountdown timeRemaining={timeRemaining} />
        </View>

        <View style={styles.textParentContainer}>
          <View style={[styles.textContainer, styles.leftTextContainer]}>
            <Text style={styles.drawInfoTitle}>Total Raffle Value</Text>
            {/* function to style item.price */}
            <Text style={[styles.drawInfoText, styles.drawInfoLeftText]}>
              £{draw.totalPrice}
            </Text>
          </View>
          <View style={[styles.textContainer, styles.rightTextContainer]}>
            <Text style={styles.drawInfoTitle}>Most Valuable Item</Text>
            <Text style={[styles.drawInfoText, styles.drawInfoRightText]}>
              {item.title}
            </Text>
          </View>
        </View>
      </InnerShadow>
    </AnimatedBorder>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    marginVertical: PIXELS * 2,
    backgroundColor: "rgb(211, 189, 179)",
    borderRadius: PIXELS * 2,
  },
  wrap: {
    justifyContent: "flex-start",
  },
  titleContainer: {
    marginBottom: PIXELS / 2,
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
  leftTextContainer: {
    flex: 1,
  },
  rightTextContainer: {
    flex: 1.5,
  },
  textContainer: {
    padding: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  drawInfoTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#270404",
  },
  drawInfoLeftText: {
    fontSize: 18,
  },
  drawInfoRightText: {
    fontSize: 16,
  },
  drawInfoText: {
    width: "100%",
    height: "80%",
    paddingTop: PIXELS / 4,
    textAlign: "center",
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
