import React from "react";
import { StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import { SKELETON_THREE_COLORS } from "../../utils/constants/styles/colors";
import {
  IMAGE_CAROUSEL_HEIGHT,
  IMAGE_CAROUSEL_WIDTH,
  ITEM_LIST_HEIGHT,
  PIXELS,
} from "../../utils/constants/styles/dimensions";

/* ---------------------------------------------------------------- */

const Spacer = ({ height = PIXELS }) => <MotiView style={{ height }} />;

const Item = () => (
  <MotiView style={styles.itemsFrame}>
    <Skeleton
      width={"50%"}
      height={PIXELS * 1.5}
      colors={SKELETON_THREE_COLORS}
    />
    <Spacer height={PIXELS / 2} />
    <Skeleton width={"70%"} height={PIXELS} colors={SKELETON_THREE_COLORS} />
    <Spacer height={PIXELS / 4} />
    <Skeleton width={"70%"} height={PIXELS} colors={SKELETON_THREE_COLORS} />
    <Spacer height={PIXELS / 4} />
    <Skeleton width={"70%"} height={PIXELS} colors={SKELETON_THREE_COLORS} />
  </MotiView>
);

/* ---------------------------------------------------------------- */

const SkeletonDrawDetails = () => {
  return (
    <>
      <Spacer height={PIXELS * 2} />
      <Skeleton
        height={IMAGE_CAROUSEL_HEIGHT}
        width={IMAGE_CAROUSEL_WIDTH}
        radius={PIXELS / 2}
        colors={SKELETON_THREE_COLORS}
      />
      <MotiView style={styles.itemsFrameContainer}>
        <Item />
        <Item />
        <Item />
      </MotiView>
    </>
  );
};

const styles = StyleSheet.create({
  itemsFrameContainer: {
    width: "85%",
    height: ITEM_LIST_HEIGHT - PIXELS * 2,
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemsFrame: {
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderBottomColor: "gray",
  },
});

export default SkeletonDrawDetails;
