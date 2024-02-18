import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import AnimatedBorder from "../style/AnimatedBorder";
import CustomCountdown from "../general/CustomCountdown";
import SkeletonUpcomingDraw from "../skeletons/SkeletonUpcomingDraw";

import { apiStatus } from "../../utils/constants/data/apiStatus";
import {
  BEST_DRAW_HEIGHT,
  BEST_DRAW_WIDTH,
  PIXELS,
} from "../../utils/constants/styles/dimensions";

import useUpcomingDraw from "../../hooks/components/useUpcomingDraw";

const UpcomingDraw = () => {
  const {
    state,
    bestDraw: draw,
    bestItem: item,
    timeRemaining,
  } = useUpcomingDraw();

  return state.reqStatus === apiStatus.LOADING ? (
    <SkeletonUpcomingDraw />
  ) : !!draw && !!item ? (
    <AnimatedBorder style={styles.container}>
      <LinearGradient
        colors={["#EE67B0", "#9956EE"]}
        style={styles.gradient}
        start={{ x: 0.3, y: 0.6 }}
        end={{ x: 0.6, y: 0.3 }}
      />
      <View style={styles.blur}>
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
      </View>
    </AnimatedBorder>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    marginVertical: PIXELS * 3,
    borderRadius: PIXELS * 2,
  },
  gradient: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  blur: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 11,
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
    textShadowRadius: 4,
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
    fontWeight: "600",
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
    color: "white",
    textShadowColor: "rgba(39, 4, 4, 0.8)",
    textShadowRadius: 8,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default UpcomingDraw;
