import React, { useEffect, useState } from "react";

import DrawSort from "../../components/draw/DrawSort";
import DrawFilter from "../../components/draw/DrawFilter";
import FilterIcons from "../../components/draw/FilterIcons";

import isEqual from "../../utils/isEqual";
import { DrawType } from "../../utils/types/objectTypes";
import { SortDataValueType } from "../../utils/constants/data/dropdown/sortData";

import useDraws from "./useDraws";

/* --------------------------------------------------------
 * --------------- Use to filter/sort Draws ---------------
 * -------------------------------------------------------- */

const useDrawsFilters = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortData, setSortData] = useState<SortDataValueType>("default");
  const [filteredDraws, setFilteredDraws] = useState<DrawType[]>();

  const { state, draws, hardRefetch } = useDraws();

  const toggleSort = () => setIsSortOpen(!isSortOpen);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const onSubmitFilter = (data: DrawType[]) => {
    setIsFilterOpen(false);
    setFilteredDraws(data);
  };

  const onSubmitSort = (item: SortDataValueType) => {
    setIsSortOpen(false);
    setSortData(item);
  };

  useEffect(() => {
    if (!!filteredDraws && filteredDraws.length > 0) {
      let sortedDraws = [...filteredDraws];

      switch (sortData) {
        case "default":
        case "openingDay":
          sortedDraws.sort(
            (a, b) =>
              new Date(a.openingDate).getTime() -
              new Date(b.openingDate).getTime()
          );
          break;
        case "closingDay":
          sortedDraws.sort(
            (a, b) =>
              new Date(a.closingDate).getTime() -
              new Date(b.closingDate).getTime()
          );
          break;
        case "raffleValue":
          // TODO: Add logic to sort based on item total price
          break;
        default:
          break;
      }

      if (!isEqual(sortedDraws, filteredDraws)) setFilteredDraws(sortedDraws);
    }
  }, [sortData, filteredDraws]);

  useEffect(() => {
    if (draws && draws.length > 0) setFilteredDraws(draws);
  }, [draws]);

  return {
    state,
    component: {
      Filter: () => (
        <DrawFilter
          enable={isFilterOpen}
          onSubmit={onSubmitFilter}
          draws={draws as DrawType[]}
        />
      ),
      Sort: () => (
        <DrawSort
          enable={isSortOpen}
          handleSort={onSubmitSort}
          selectedItem={sortData}
        />
      ),
      FilterButtons: () => (
        <FilterIcons
          isFilterOpen={isFilterOpen}
          isSortOpen={isSortOpen}
          toggleFilter={toggleFilter}
          toggleSort={toggleSort}
        />
      ),
    },
    filteredDraws,
    hardRefetch,
  };
};

export default useDrawsFilters;
