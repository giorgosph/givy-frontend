import React from "react";
import { Text, StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { SKELETON_THREE_COLORS } from "../../utils/constants/styles/colors";

/* ---------------------------------------------------------------- */

const Spacer = ({ width = PIXELS / 2 }) => <MotiView style={{ width }} />;

/* ---------------------------------------------------------------- */

const SkeletonCustomCountdown = () => {
  const Item = () => (
    <MotiView style={styles.itemFrame}>
      <Skeleton width="100%" height="100%" colors={SKELETON_THREE_COLORS} />
      <Text style={styles.digit}>0</Text>
    </MotiView>
  );
  return (
    <MotiView style={styles.frame}>
      <Item />
      <Item />
      <Spacer />
      <Item />
      <Item />
      <Spacer />
      <Item />
      <Item />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  frame: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemFrame: {
    width: 28,
    height: 36,
    marginHorizontal: PIXELS / 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  digit: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    top: 6,
    left: 8,
  },
});

export default SkeletonCustomCountdown;
