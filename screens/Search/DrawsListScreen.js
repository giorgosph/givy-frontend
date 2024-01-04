import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Header from "../../components/general/Header";
import DrawListing from "../../components/draw/DrawListing";
import MainContainer from "../../components/general/MainContainer";

import SortIcon from "../../components/icons/SortIcon";
import FilterIcon from "../../components/icons/FilterIcon";

import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR, HEADING_FADE_COLOR } from "../../utils/constants/styles/colors";

import useDraws from "../../hooks/components/useDraws";
import useDrawsFilters from "../../hooks/components/useDrawsFilters";

const DrawsListScreen = () => {
  const { state, filteredDraws: draws, component } = useDrawsFilters();

  const { Filter, Sort, FilterButtons } = component;

  return (
    <>
      {Sort()}
      {Filter()}
      <Header />
      <MainContainer centered>
        {FilterButtons()}
        <View style={styles.separator} />

        <View style={styles.drawsContainer}>
          {draws && draws.length > 0 ? draws.map((draw) => <DrawListing key={draw.id} draw={draw}/>)
          : (
            <View>
              <Text style={{color: 'white'}}>There are no upcoming Draws, check again later!</Text>
            </View>
          )}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
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