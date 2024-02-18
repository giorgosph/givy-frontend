import React from "react";
import { StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import {
  SKELETON_SECONDARY_COLORS,
  SKELETON_THREE_COLORS,
} from "../../utils/constants/styles/colors";
import {
  BEST_DRAW_HEIGHT,
  BEST_DRAW_WIDTH,
  PIXELS,
} from "../../utils/constants/styles/dimensions";
import SkeletonCustomCountdown from "./SkeletonCustomCountdown";

/* ---------------------------------------------------------------- */

const Spacer = ({ height = PIXELS }) => <MotiView style={{ height }} />;

/* ---------------------------------------------------------------- */

const SkeletonUpcomingDraw = () => {
  return (
    <>
      <MotiView style={styles.frame}>
        <MotiView style={styles.fill}>
          <Skeleton
            width="100%"
            height="100%"
            colors={SKELETON_SECONDARY_COLORS}
          />
        </MotiView>

        <MotiView style={styles.titleFrame}>
          <Skeleton
            width="80%"
            height={PIXELS}
            colors={SKELETON_THREE_COLORS}
          />
        </MotiView>

        <MotiView style={{ alignItems: "center" }}>
          <SkeletonCustomCountdown />
        </MotiView>

        <MotiView style={styles.textParentFrame}>
          <MotiView style={[styles.textFreame, styles.leftTextFreame]}>
            <Skeleton
              width="80%"
              height={PIXELS}
              colors={SKELETON_THREE_COLORS}
            />
            <Spacer height={PIXELS} />
            <Skeleton
              width="60%"
              height={PIXELS * 2}
              colors={SKELETON_THREE_COLORS}
            />
          </MotiView>
          <MotiView style={[styles.textFreame, styles.rightTextFreame]}>
            <Skeleton
              width="80%"
              height={PIXELS}
              colors={SKELETON_THREE_COLORS}
            />
            <Spacer height={PIXELS} />
            <Skeleton
              width="60%"
              height={PIXELS * 2}
              colors={SKELETON_THREE_COLORS}
            />
          </MotiView>
        </MotiView>
      </MotiView>
    </>
  );
};

const styles = StyleSheet.create({
  frame: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    paddingVertical: PIXELS,
    marginVertical: PIXELS * 2,
    alignSelf: "center",
    borderRadius: PIXELS * 2,
  },
  fill: {
    width: BEST_DRAW_WIDTH - PIXELS,
    height: BEST_DRAW_HEIGHT + PIXELS,
    position: "absolute",
    top: 0,
    left: PIXELS / 2,
  },
  titleFrame: {
    marginBottom: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textParentFrame: {
    width: "100%",
    flexDirection: "row",
  },
  leftTextFreame: {
    flex: 1,
  },
  rightTextFreame: {
    flex: 1.5,
  },
  textFreame: {
    padding: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SkeletonUpcomingDraw;
