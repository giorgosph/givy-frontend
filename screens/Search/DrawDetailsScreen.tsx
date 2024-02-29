import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";

import ItemListing from "../../components/draw/ItemListing";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import ImageCarousel from "../../components/general/ImageCarousel";
import CustomCountdown from "../../components/general/CustomCountdown";
import SkeletonDrawDetails from "../../components/skeletons/SkeletonDrawDetails";

import { apiStatus } from "../../utils/constants/data/apiStatus";
import {
  ITEM_LIST_HEIGHT,
  PIXELS,
} from "../../utils/constants/styles/dimensions";
import { ClientSearchDrawDetailsScreenProps } from "../../utils/navigation/types";

import useDrawItems from "../../hooks/components/useDrawItems";
import { BACKGROUND_SECONDARY_COLOR } from "../../utils/constants/styles/colors";

// import drawItems from "../../utils/constants/data/drawItem.json";

const DrawDetailsScreen = ({ route }: ClientSearchDrawDetailsScreenProps) => {
  const { draw } = route.params;

  const { state, items, images, opted, timeRemaining, callback } =
    useDrawItems(draw);
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
            {/* TODO -> remove as string[] after making image not null */}
            <ImageCarousel images={images as string[]} loop />

            <CustomCountdown timeRemaining={timeRemaining} />

            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.centered}
            >
              {items && items.length > 0 ? (
                items.map((item) => <ItemListing key={item.id} item={item} />)
              ) : (
                <Text style={{ color: "white" }}>No Items to display!</Text>
              )}

              {/* Remove after testing time related lagorithms */}
              {/* {drawItems.map(item => <ItemListing key={item.id} item={item}/>)} */}
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
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    maxHeight: ITEM_LIST_HEIGHT,
    padding: PIXELS,
    backgroundColor: BACKGROUND_SECONDARY_COLOR,
    borderRadius: 12,
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    height: "12%",
    minHeight: 90,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default DrawDetailsScreen;
