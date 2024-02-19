import React from "react";
import { StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { SKELETON_THREE_COLORS } from "../../utils/constants/styles/colors";

/* ---------------------------------------------------------------- */

const Spacer = ({ width = PIXELS }) => <MotiView style={{ width }} />;

/* ---------------------------------------------------------------- */

const SkeletonFeaturedDraws = () => {
  return (
    <MotiView style={styles.frame}>
      <Skeleton
        width={175}
        height={150}
        colors={SKELETON_THREE_COLORS}
        radius={16}
      />
      <Spacer />
      <Skeleton
        width={175}
        height={150}
        colors={SKELETON_THREE_COLORS}
        radius={16}
      />
    </MotiView>
  );
};

const styles = StyleSheet.create({
  frame: {
    marginVertical: PIXELS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SkeletonFeaturedDraws;
