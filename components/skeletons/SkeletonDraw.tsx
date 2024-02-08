import React from "react";
import { StyleSheet } from "react-native";

import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

import { BACKGROUND_COLOR } from "../../utils/constants/styles/colors";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

/* ---------------------------------------------------------------- */

const colors = [BACKGROUND_COLOR, '#8b7e7e',  BACKGROUND_COLOR];

const Spacer = ({ height = PIXELS }) => <MotiView style={{ height }} />

const Item = () => (
  <MotiView style={styles.itemsFrame}>
    <MotiView style={styles.leftItemFrame}>
      <Skeleton width={'100%'} height={'100%'} colors={colors} />
    </MotiView>
    <MotiView style={styles.rightItemFrame}>
      <Spacer height={PIXELS / 2} />
      <Skeleton width={'50%'} height={PIXELS} colors={colors} />
      <Spacer height={PIXELS} />
      <Skeleton width={'100%'} height={PIXELS} colors={colors} />
      <Spacer height={PIXELS / 2} />
      <Skeleton width={'100%'} height={PIXELS} colors={colors} />
      <Spacer height={PIXELS / 2} />
      <Skeleton width={'100%'} height={PIXELS} colors={colors} />
    </MotiView>
  </MotiView>
);

/* ---------------------------------------------------------------- */

const SkeletonDraw = () => {
  
  return (
    <>
      <MotiView style={styles.itemsFrameContainer}>
        <Item />
        <Item />
        <Item />
        <Item />
      </MotiView>
    </>
  );
};

const styles = StyleSheet.create({
  itemsFrameContainer: {
    width: '100%',
    height: MAIN_HEIGHT - PIXELS * 4,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  itemsFrame: {
    width: '80%',
    height: 140,
    padding: PIXELS * 2/6, 
    marginVertical: PIXELS / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 24,
    // borderColor: 'grey',
    backgroundColor: '#464040',
  },
  leftItemFrame: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: PIXELS / 4,
  },
  rightItemFrame: {
    width: '60%',
    display: 'flex',
  },
});

export default SkeletonDraw;
