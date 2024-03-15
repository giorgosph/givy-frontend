import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import ItemListing from "../../components/draw/ItemListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import CustomCountdown from "../../components/general/CustomCountdown";
import CustomImageCarousel from "../../components/general/CustomImageCarousel";
import SkeletonDrawDetails from "../../components/skeletons/SkeletonDrawDetails";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { BACKGROUND_SECONDARY_COLOR } from "../../utils/constants/styles/colors";
import { ClientSearchDrawDetailsScreenProps } from "../../utils/navigation/types";

import useDrawItems from "../../hooks/components/useDrawItems";

// import drawItems from "../../utils/constants/data/drawItem.json";
import AnimatedLottieView from "lottie-react-native";

const DrawDetailsScreen = ({ route }: ClientSearchDrawDetailsScreenProps) => {
  const { draw } = route.params;

  const { state, items, images, opted, timer, progress, callback } =
    useDrawItems(draw);
  const { timeRemaining } = timer;
  const loading = state.reqStatus === apiStatus.LOADING;

  const buttonTitle = timeRemaining.expired
    ? "Closed"
    : opted
    ? "Already Opted In"
    : "Opt In";
  const disableButton = loading || opted || timeRemaining.expired;

  const onPress = () => callback.handleOptIn();

  return (
    <>
      {callback.renderWinnerModal()}
      <CustomHeader title={draw.title} />
      <MainContainer centered>
        {loading && items.length == 0 ? (
          <SkeletonDrawDetails />
        ) : (
          <>
            <View style={styles.imagesContainer}>
              <CustomImageCarousel images={images} width="85%" />
            </View>

            <View style={[styles.countContainer, styles.centered]}>
              <CustomCountdown timeRemaining={timeRemaining} />
            </View>

            <ScrollView
              style={styles.itemsContainer}
              contentContainerStyle={styles.centered}
            >
              {items && items.length > 0 ? (
                items.map((item) => <ItemListing key={item.id} item={item} />)
              ) : (
                <Text style={{ color: "white" }}>No Items to display!</Text>
              )}

              {/* Remove after testing time related lagorithms */}
              {/* {drawItems.map((item) => <ItemListing key={item.id} item={item} />)} */}
            </ScrollView>
          </>
        )}

        <View style={styles.buttonContainer}>
          {timeRemaining.closingSoon && (
            <Text style={{ color: "red" }}>Closing soon</Text>
          )}

          <CustomButton
            title={buttonTitle}
            disabled={disableButton}
            onPress={onPress}
          />
        </View>

        {timeRemaining.expired && (
          <AnimatedLottieView
            source={require("../../assets/lottie/winning.json")}
            progress={progress}
            style={styles.lottie}
          />
        )}
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    marginTop: PIXELS,
  },
  countContainer: {
    width: "100%",
    height: "10%",
    minHeight: 64,
  },
  itemsContainer: {
    width: "85%",
    maxHeight: "35%",
    padding: PIXELS,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  buttonContainer: {
    width: "100%",
    height: "12%",
    minHeight: 90,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
    position: "absolute",
    zIndex: 1000,
  },
});

export default DrawDetailsScreen;
