import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";

import { AuthContext } from "../../context/store";
import {
  BACKGROUND_SECONDARY_COLOR,
  HEADING_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";
import { ClientHomeScreenProps } from "../../utils/navigation/types";
import {
  BEST_DRAW_HEIGHT,
  BEST_DRAW_WIDTH,
  PIXELS,
  WIDTH,
} from "../../utils/constants/styles/dimensions";
import { confirmationTypes as CT } from "../../utils/constants/data/confirmationTypes";

import useModal from "../../hooks/useModal";
import { mobileInfo } from "../../utils/constants/data/modalInfo";
import UpcomingDraw from "../../components/home/UpcomingDraw";
import Leaderboard from "../../components/home/Leaderboard";

const ClientHomeScreen = ({ navigation }: ClientHomeScreenProps) => {
  const { setVisible, renderModal } = useModal();
  const authCtx = useContext(AuthContext);

  const navToDetails = () => navigation.navigate("ClientSearchTab");

  useEffect(() => {
    authCtx.tempToken &&
      navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
    // TODO -> check if mobile is confirmed
    // authCtx.token && setVisible(mobileInfo(navigation, () => 0));
  }, []);

  return (
    <>
      {renderModal()}
      <ScrollView>
        <Header />
        <MainContainer>
          <View style={styles.contentLeftWrap}>
            <Text style={styles.title}>Lorem Ipsum</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a
              ultrices quam, nec congue sapien.Nullam nisl dolor,
            </Text>
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
            <View>
              <Leaderboard />
            </View>
          </View>

          <View style={styles.contentRightWrap}>
            <Text style={styles.title}>Lorem Ipsum</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a
              ultrices quam, nec congue sapien.Nullam nisl dolor,
            </Text>
          </View>
        </MainContainer>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
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
  contentLeftWrap: {
    width: (WIDTH * 3) / 4,
    height: "50%",
    paddingLeft: PIXELS,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
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
    fontSize: 24,
    fontWeight: "800",
    color: HEADING_COLOR,
    textTransform: "capitalize",
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
