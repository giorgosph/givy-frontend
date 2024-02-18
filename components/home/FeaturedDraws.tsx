import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FeaturedDrawListing from "./FetauredDrawListing";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";

const images = [
  "https://www.dusanholovej.com/files/layout/img/blog/TUTORIAL-Shampoo-and-Shower-Gel.jpg",
  "https://petapixel.com/assets/uploads/2023/06/Boss-Infinite-800x533.jpg",
  "https://cloudfront.omsphoto.com/wp-content/uploads/2023/12/GucciGuilty59015.jpg",
];

const FeaturedDraws = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Draws</Text>
      <View style={styles.drawContainer}>
        <FeaturedDrawListing images={images} />
        <FeaturedDrawListing images={images} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "96%",
    padding: PIXELS,
    alignSelf: "center",
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: PIXELS * 2,
  },
  drawContainer: {
    marginVertical: PIXELS,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
