import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomImageCarousel from "../general/CustomImageCarousel";
import SkeletonFeaturedDraws from "../skeletons/SkeletonFeaturedDraws";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";

import useFeaturedDraws from "../../hooks/components/useFeaturedDraws";

const FeaturedDraws = () => {
  const { state, draws } = useFeaturedDraws();

  return state.reqStatus === apiStatus.LOADING ? (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Draws</Text>
      <View style={styles.drawContainer}>
        <SkeletonFeaturedDraws />
      </View>
    </View>
  ) : (
    !!draws && (
      <View style={styles.container}>
        <Text style={styles.title}>Featured Draws</Text>
        <View style={styles.drawContainer}>
          {draws.map((draw) => (
            <CustomImageCarousel
              key={draw.id}
              images={draw.drawImages}
              width={"40%"}
            />
          ))}
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    padding: PIXELS,
    marginVertical: PIXELS * 4,
    alignSelf: "center",
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: PIXELS * 2,
  },
  drawContainer: {
    marginVertical: PIXELS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: HEADING_FADE_COLOR,
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 2,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default FeaturedDraws;
