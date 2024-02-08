import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Header from "../../components/general/Header";
import DrawListing from "../../components/draw/DrawListing";
import MainContainer from "../../components/general/MainContainer";
import SkeletonDraw from "../../components/skeletons/SkeletonDraw";

import { HEADING_FADE_COLOR } from "../../utils/constants/styles/colors";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

// import cDraws from "../../utils/constants/data/draw.json"
import { apiStatus } from "../../utils/constants/data/apiStatus";

import useDrawsFilters from "../../hooks/components/useDrawsFilters";

const DrawsListScreen = () => {
  const { state, filteredDraws: draws, component } = useDrawsFilters();
  const loading = state.reqStatus === apiStatus.LOADING;

  const { Filter, Sort, FilterButtons } = component;

  return (
    <>
      {Sort()}
      {Filter()}
      <Header />
      <MainContainer centered>
        {FilterButtons()}
        <View style={styles.separator} />
        
        {loading ? <SkeletonDraw /> : (
          <ScrollView style={styles.drawsContainer} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
            {!!draws && draws.length > 0 ? draws.map((draw) => <DrawListing key={draw.id} draw={draw}/>)
            : (
                <Text style={{color: 'white'}}>There are no upcoming Draws, check again later!</Text>
            )}

            {/* Remove after testing time related lagorithms */}
            {/* {cDraws.map((draw) => <DrawListing key={draw.id} draw={draw}/>)} */}
          </ScrollView>
        )}

      </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    height: PIXELS * 4,
    paddingHorizontal: PIXELS * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  }, 
  drawsContainer: {
    width: '100%',
    height: MAIN_HEIGHT - PIXELS * 4,
    display: 'flex',
  },
  separator: {
    width: '90%',
    margin: 0,
    padding: 0,
    borderBottomColor: HEADING_FADE_COLOR,
    borderBottomWidth: 1,
    marginVertical: PIXELS / 4,
  },
});

export default DrawsListScreen;