import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

/* ----- Types ----- */
type PropsType = {
  images: string[];
};

/* ----------------- */

const FeaturedDrawListing = ({ images }: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={[styles.image, { opacity: index === currentIndex ? 1 : 0 }]}
          />
        ))}
        <TouchableWithoutFeedback onPress={handlePrevious}>
          <View style={[styles.sideButton, styles.leftButton]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleNext}>
          <View style={[styles.sideButton, styles.rightButton]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === currentIndex ? "white" : "#929292",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 175,
    height: 150,
    overflow: "hidden",
    borderRadius: 16,
    position: "relative",
  },
  image: {
    width: 175,
    height: 150,
    resizeMode: "cover",
    position: "absolute",
  },
  sideButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
  },
  leftButton: {
    left: 0,
    backgroundColor: "transparent",
  },
  rightButton: {
    right: 0,
    backgroundColor: "transparent",
  },
  dotContainer: {
    width: "100%",
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default FeaturedDrawListing;
