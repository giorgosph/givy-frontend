import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { PIXELS, WIDTH } from "../../utils/constants/styles/dimensions";
import ArrowIcon from "../icons/ArrowIcon";

/* ----- Types ----- */
type PropsType = {
  images: string[];
  width: number | string;
};

/* ----------------- */

const CustomImageCarousel = (props: PropsType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, width } = props;

  const numericWidth =
    typeof width === "number" ? width : (parseFloat(width) / 100) * WIDTH;

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
      <View style={[styles.imageContainer, { width: numericWidth }]}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={[
              styles.image,
              { width: numericWidth },
              { opacity: index === currentIndex ? 1 : 0 },
            ]}
          />
        ))}
        <TouchableWithoutFeedback onPress={handlePrevious}>
          <View style={[styles.sideButton, styles.leftButton]}>
            <ArrowIcon color="grey" direction="B" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleNext}>
          <View style={[styles.sideButton, styles.rightButton]}>
            <ArrowIcon color="grey" direction="F" />
          </View>
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
    aspectRatio: 5 / 4,
    overflow: "hidden",
    borderRadius: 16,
    shadowColor: "#000",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.8,
        shadowRadius: 12,
      },
      android: {
        elevation: 12,
      },
    }),
    position: "relative",
  },
  image: {
    aspectRatio: 5 / 4,
    resizeMode: "stretch",
    position: "absolute",
    zIndex: 10,
  },
  sideButton: {
    paddingHorizontal: PIXELS / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 11,
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
    zIndex: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default CustomImageCarousel;
