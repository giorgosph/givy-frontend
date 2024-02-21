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
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import { DefaultHomeScreenProps } from "../../utils/navigation/types";
import {
  BEST_DRAW_HEIGHT,
  BEST_DRAW_WIDTH,
  PIXELS,
  WIDTH,
} from "../../utils/constants/styles/dimensions";
import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";

const DefaultHomeScreen = ({ navigation }: DefaultHomeScreenProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const navToProfileTab = () => navigation.navigate("DefaultProfileTab");
  const progress = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    progress.setValue(0);
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 6500);

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
  };

  const onTouch = () => {
    if (!isPlaying) {
      progress.setValue(0.27);
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2500);

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
            <Text style={styles.titleText}>Where Luck Meets Excitement</Text>
          </View>

          <TouchableWithoutFeedback onPress={onTouch}>
            <LottieView
              source={require("../../assets/lottie/gift.json")}
              progress={progress}
              style={styles.content}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.textContiner}>
          <Text style={styles.textTitle}>GET IN EARLY</Text>
          <Text style={styles.textDesc}>Improve Your Chances To Win</Text>
          <Text style={styles.text}>
            Givey is finally getting around to offer a chance for everyone to
            win valuable prizes, and the best part...
          </Text>
          <Text style={styles.textFocus}>It's Totally FREE</Text>
          <CustomButton
            title="Create an Account"
            onPress={navToProfileTab}
            style={styles.button}
            textStyle={styles.buttonText}
          />

          <LottieView
            source={require("../../assets/lottie/celebrate.json")}
            style={[styles.celebrate, styles.celeLeft]}
            autoPlay
          />
          <LottieView
            source={require("../../assets/lottie/celebrate.json")}
            style={[styles.celebrate, styles.celeRight]}
            autoPlay
          />
        </View>

        <TouchableWithoutFeedback onPress={navToProfileTab}>
          <View style={styles.upcomingWrap}>
            <UpcomingDraw />
          </View>
        </TouchableWithoutFeedback>

        <View style={[styles.textContiner, styles.extraPadding]}>
          <Text style={styles.textTitle}>PROMOTE CREATIVITY</Text>
          <Text style={styles.textDesc}>
            Are you an artist, a producer or a seller?
          </Text>
          <View style={styles.textContinerRight}>
            <Text style={styles.text}>
              Givey is looking to help new innovative products get attention. Go
              ahead and create an account to contact us and learn more!
            </Text>
          </View>

          <LottieView
            source={require("../../assets/lottie/construct.json")}
            style={styles.construct}
            autoPlay
          />
        </View>

        <FeaturedDraws />
      </MainContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    width: "100%",
    paddingLeft: PIXELS * 1.5,
    marginTop: PIXELS * 4,
    flexDirection: "row",
  },
  titleContainer: {
    flex: 1,
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
  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: HEADING_FADE_COLOR,
    position: "relative",
    top: -10,
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
  upcomingWrap: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    marginTop: PIXELS * 4,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  textContiner: {
    width: WIDTH - PIXELS * 2,
    padding: PIXELS,
    marginTop: PIXELS * 4,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 24,
    overflow: "hidden",
    zIndex: 13,
  },
  textContinerRight: {
    width: "65%",
    marginTop: PIXELS * 2,
    alignSelf: "flex-end",
    zIndex: 13,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: HEADING_COLOR,
    textAlign: "center",
    zIndex: 14,
  },
  textDesc: {
    fontSize: 12,
    fontWeight: "400",
    color: HEADING_FADE_COLOR,
    textAlign: "center",
    zIndex: 14,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: HEADING_COLOR,
    marginTop: PIXELS,
    textAlign: "center",
    zIndex: 14,
  },
  textFocus: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: PIXELS,
    color: "#9956EE",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 4,
    zIndex: 14,
  },
  button: {
    marginTop: PIXELS,
    alignSelf: "center",
    backgroundColor: "rgba(238, 103, 176, 0.4)",
    borderWidth: 1,
    borderColor: "white",
    zIndex: 14,
  },
  buttonText: {
    fontSize: 14,
    color: "white",
  },
  celebrate: {
    width: 180,
    aspectRatio: 1.5,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  celeLeft: {
    left: -PIXELS,
  },
  celeRight: {
    right: -PIXELS,
  },
  construct: {
    width: "80%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    left: -PIXELS,
    bottom: -PIXELS * 2.5,
    zIndex: 11,
  },
  extraPadding: {
    paddingBottom: PIXELS * 4,
  },
});

export default DefaultHomeScreen;
