import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";

import LottieView from "lottie-react-native";

import Header from "../../components/general/Header";
import UpcomingDraw from "../../components/home/UpcomingDraw";
import FeaturedDraws from "../../components/home/FeaturedDraws";
import MainContainer from "../../components/general/MainContainer";

import { ClientHomeScreenProps } from "../../utils/navigation/types";
import { PIXELS, WIDTH } from "../../utils/constants/styles/dimensions";
import { HEADING_FADE_COLOR } from "../../utils/constants/styles/colors";

const DefaultHomeScreen = ({ navigation }: ClientHomeScreenProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const progress = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    progress.setValue(0);
    setIsPlaying(true);
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(progress, {
        toValue: 0.27,
        duration: 2500,
        useNativeDriver: true,
      }),
    ]).start();
    setIsPlaying(false);
  };

  const onTouch = () => {
    if (!isPlaying) {
      progress.setValue(0.27);
      setIsPlaying(true);
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 0.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          toValue: 0.27,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <ScrollView>
      <Header />
      <MainContainer>
        <View style={styles.firstContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Givey</Text>
            <Text style={[styles.title, styles.title2]}>
              <Text style={{ color: "#EE67B0" }}>Raffle </Text>Fiesta
            </Text>
            <Text style={styles.text}>Where Luck Meets Excitement</Text>
          </View>

          <TouchableWithoutFeedback onPress={onTouch}>
            <LottieView
              source={require("../../assets/lottie/gift.json")}
              progress={progress}
              style={styles.content}
            />
          </TouchableWithoutFeedback>
        </View>

        <UpcomingDraw />

        <FeaturedDraws />
      </MainContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    width: "100%",
    paddingLeft: PIXELS * 1.5,
    marginTop: PIXELS * 2,
    flexDirection: "row",
  },
  titleContainer: {
    flex: 1,
  },
  content: {
    width: 240,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: -PIXELS * 2,
    right: -PIXELS / 2,
  },
  contentRightWrap: {
    height: "50%",
    marginLeft: WIDTH / 4 + PIXELS,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 48,
    fontWeight: "800",
    color: "#9956EE",
    textShadowColor: "black",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
  },
  title2: {
    fontSize: 32,
    fontWeight: "600",
    position: "relative",
    top: -10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: HEADING_FADE_COLOR,
    position: "relative",
    top: -10,
  },
});

export default DefaultHomeScreen;
