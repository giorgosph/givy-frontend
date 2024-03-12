import React, { useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import { AuthContext } from "../../context/store";

import AnimatedLottieView from "lottie-react-native";
import Header from "../../components/general/Header";
import Leaderboard from "../../components/home/Leaderboard";
import UpcomingDraw from "../../components/home/UpcomingDraw";
import MainContainer from "../../components/general/MainContainer";

import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";
import { ClientHomeScreenProps } from "../../utils/navigation/types";
import {
  BEST_DRAW_HEIGHT,
  BEST_DRAW_WIDTH,
  HEADER_HEIGHT,
  MAIN_HEIGHT,
  PIXELS,
  WIDTH,
} from "../../utils/constants/styles/dimensions";
import { confirmationTypes as CT } from "../../utils/constants/data/confirmationTypes";

import useModal from "../../hooks/useModal";
import { mobileInfo } from "../../utils/constants/data/modalInfo";

const ClientHomeScreen = ({ navigation }: ClientHomeScreenProps) => {
  const { setVisible, renderModal } = useModal();
  const authCtx = useContext(AuthContext);
  const scrollViewRef = useRef<ScrollView>(null);

  const navToDetails = () => navigation.navigate("ClientSearchTab");

  useEffect(() => {
    authCtx.tempToken &&
      navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
    // TODO -> check if mobile is confirmed
    // authCtx.token && setVisible(mobileInfo(navigation, () => 0));
  }, []);

  const scrollToHeight = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: MAIN_HEIGHT + HEADER_HEIGHT,
        animated: true,
      });
    }
  };

  return (
    <>
      {renderModal()}
      <ScrollView ref={scrollViewRef}>
        <Header />
        <MainContainer>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.title}>Experience the Givey Bliss Blitz</Text>
              <Text style={[styles.title, styles.titleEffect]}>
                Experience the Givey Bliss Blitz
              </Text>
              <Text style={[styles.title, styles.titleEffect2]}>
                Experience the Givey Bliss Blitz
              </Text>
            </View>
            <Text style={styles.textTitle}>Giving Made Thrilling</Text>
            <Text style={styles.paragraph}>
              Save the Dates | Don't Miss Short Term Raffles
            </Text>

            <AnimatedLottieView
              source={require("../../assets/lottie/date.json")}
              style={styles.dateLottieStyle}
              autoPlay
            />
            <TouchableWithoutFeedback onPress={scrollToHeight}>
              <AnimatedLottieView
                source={require("../../assets/lottie/scroll.json")}
                style={styles.arrowLottieStyle}
                autoPlay
              />
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback onPress={navToDetails}>
            <View style={styles.upcomingWrap}>
              <UpcomingDraw />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.textContiner}>
            <Text style={styles.textTitle}>
              TAKE A CHANCE TO THE LEADERBOARD
            </Text>
            <Text style={styles.textDesc}>
              It's Free, Keep Up For New Short Term Raffles
            </Text>
            <Leaderboard />
          </View>
        </MainContainer>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    height: MAIN_HEIGHT,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dateLottieStyle: {
    width: "96%",
    aspectRatio: 1,
    position: "relative",
    top: PIXELS,
  },
  arrowLottieStyle: {
    width: "40%",
    aspectRatio: 1,
    position: "relative",
    bottom: PIXELS / 2,
  },
  textContiner: {
    width: WIDTH - PIXELS * 2,
    padding: PIXELS,
    marginVertical: PIXELS * 4,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 24,
    overflow: "hidden",
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
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: PIXELS,
    textAlign: "center",
    zIndex: 12,
  },
  titleEffect: {
    color: "transparent",
    textShadowColor: "rgba(238, 103, 176, 0.4)",
    textShadowRadius: 1,
    position: "absolute",
    top: 3,
    right: 5,
    zIndex: 11,
  },
  titleEffect2: {
    color: "transparent",
    textShadowColor: "rgba(56, 109, 189, 0.6)",
    textShadowRadius: 1,
    position: "absolute",
    bottom: 3,
    left: 5,
    zIndex: 11,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "400",
    color: HEADING_COLOR,
    textTransform: "capitalize",
  },
  upcomingWrap: {
    width: BEST_DRAW_WIDTH,
    height: BEST_DRAW_HEIGHT,
    marginTop: PIXELS * 4,
    alignSelf: "center",
    backgroundColor: "transparent",
  },
});

export default ClientHomeScreen;
