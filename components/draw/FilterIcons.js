import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";

import SortIcon from "../icons/SortIcon";
import FilterIcon from "../icons/FilterIcon";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { BUTTON_COLOR, HEADING_COLOR } from "../../utils/constants/styles/colors";

const FilterIcons = ({ isSortOpen, isFilterOpen, toggleFilter, toggleSort }) => {
  return (
  <View style={styles.filterContainer}>
    <TouchableHighlight onPress={toggleSort}>
      <SortIcon size={26} color={isSortOpen ? 'gold' : HEADING_COLOR} />
    </TouchableHighlight>
    <TouchableHighlight onPress={toggleFilter}>
      <FilterIcon size={24} color={isFilterOpen ? BUTTON_COLOR : HEADING_COLOR} />
    </TouchableHighlight>
  </View>
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
});

export default FilterIcons;
