import React from "react";
import { Text, StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { SKELETON_THREE_COLORS } from "../../utils/constants/styles/colors";

/* ---------------------------------------------------------------- */

const SpacerW = ({ width = PIXELS * 2 }) => <MotiView style={{ width }} />;
const SpacerH = ({ height = PIXELS }) => <MotiView style={{ height }} />;

/* ---------------------------------------------------------------- */

const SkeletonLeaderboard = () => {
  const Item = () => (
    <MotiView style={styles.itemFrame}>
      <Skeleton width={64} height="100%" colors={SKELETON_THREE_COLORS} />
      <SpacerW />
      <Skeleton width={64} height="100%" colors={SKELETON_THREE_COLORS} />
      <SpacerW />
      <Skeleton width={64} height="100%" colors={SKELETON_THREE_COLORS} />
    </MotiView>
  );
  return (
    <MotiView style={styles.frame}>
      <SpacerH />
      <Item />
      <SpacerH />
      <Item />
      <SpacerH />
      <Item />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  itemFrame: {
    width: "100%",
    height: 24,
    flexDirection: "row",
    marginHorizontal: PIXELS / 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

export default SkeletonLeaderboard;
