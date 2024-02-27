import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import SortIcon from "../icons/SortIcon";
import FilterIcon from "../icons/FilterIcon";
import InnerShadow from "../style/InnerShadow";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { BUTTON_COLOR } from "../../utils/constants/styles/colors";

/* ------ Types ------ */
type PropsType = {
  isSortOpen: boolean;
  isFilterOpen: boolean;
  toggleSort: () => void;
  toggleFilter: () => void;
};

/* ------------------- */

const FilterIcons = (props: PropsType) => {
  const { isSortOpen, isFilterOpen, toggleFilter, toggleSort } = props;

  return (
    <View style={styles.container}>
      <InnerShadow
        width={36}
        height={36}
        borderRadius={18}
        color="rgb(255, 255, 255)"
        style={styles.filterContainer}
        border
      >
        <TouchableOpacity onPress={toggleSort}>
          <SortIcon size={26} color={isSortOpen ? BUTTON_COLOR : "#000"} />
        </TouchableOpacity>
      </InnerShadow>

      <InnerShadow
        width={36}
        height={36}
        borderRadius={18}
        color="rgb(255, 255, 255)"
        style={styles.filterContainer}
        border
      >
        <TouchableOpacity onPress={toggleFilter}>
          <FilterIcon size={24} color={isFilterOpen ? BUTTON_COLOR : "#000"} />
        </TouchableOpacity>
      </InnerShadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: PIXELS * 4,
    paddingHorizontal: PIXELS * 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    zIndex: 21,
  },
  filterContainer: {
    position: "relative",
    top: 5,
    left: 4,
  },
});

export default FilterIcons;
