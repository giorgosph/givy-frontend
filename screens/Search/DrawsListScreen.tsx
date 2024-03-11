import React, { useState } from "react";
import { Text, StyleSheet, ScrollView, RefreshControl } from "react-native";

import Header from "../../components/general/Header";
import DrawListing from "../../components/draw/DrawListing";
import MainContainer from "../../components/general/MainContainer";
import SkeletonDraw from "../../components/skeletons/SkeletonDraw";

import { HEADING_FADE_COLOR } from "../../utils/constants/styles/colors";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

// import cDraws from "../../utils/constants/data/draw.json";
import { apiStatus } from "../../utils/constants/data/apiStatus";

import useDrawsFilters from "../../hooks/components/useDrawsFilters";
import CustomButton from "../../components/general/CustomButton";

const DrawsListScreen = () => {
  const {
    state,
    filteredDraws: draws,
    component,
    hardRefetch,
  } = useDrawsFilters();
  const loading = state.reqStatus === apiStatus.LOADING;

  const { Filter, Sort, FilterButtons } = component;

  return (
    <>
      {Sort()}
      {Filter()}
      <Header />
      <MainContainer centered>
        {FilterButtons()}

        {loading ? (
          <SkeletonDraw />
        ) : (
          <ScrollView
            style={styles.drawsContainer}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={hardRefetch} />
            }
          >
            <>
              {!!draws && draws.length > 0 ? (
                draws.map((draw) => <DrawListing key={draw.id} draw={draw} />)
              ) : (
                <Text style={{ color: "white" }}>
                  There are no upcoming Draws, check again later!
                </Text>
              )}
            </>
          </ScrollView>
        )}
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: "100%",
    height: PIXELS * 4,
    paddingHorizontal: PIXELS * 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  drawsContainer: {
    width: "100%",
    height: MAIN_HEIGHT - PIXELS * 4,
    display: "flex",
  },
  separator: {
    width: "90%",
    margin: 0,
    padding: 0,
    borderBottomColor: HEADING_FADE_COLOR,
    borderBottomWidth: 1,
    marginVertical: PIXELS / 4,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});

export default DrawsListScreen;
