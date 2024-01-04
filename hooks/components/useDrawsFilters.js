import { useEffect, useState } from 'react';

import DrawFilter from '../../components/draw/DrawFilter';
import DrawSort from '../../components/draw/DrawSort';

import useDraws from './useDraws';
import FilterIcons from '../../components/draw/FilterIcons';

/* --------------------------------------------------------
 * --------------- Use to filter/sort Draws ---------------
 * -------------------------------------------------------- */

const useDrawsFilters = () => {  
  const [sortData, setSortData] = useState('default');
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const [filterData, setFilterData] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const { state, draws } = useDraws();
  const [filteredDraws, setFilteredDraws] = useState(draws);

  const toggleSort = () => setIsSortOpen(!isSortOpen);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const onSubmitFilter = (formData) => {
    setIsFilterOpen(false);
    setFilterData(formData);
  }; 

  const onSubmitSort = (formData) => {
    setIsSortOpen(false);
    setSortData(formData);
  }; 

  useEffect(() => {
    switch (sortData) {
      case 'default':
        filteredDraws.sort((a, b) => new Date(a.openingDay) - new Date(b.openingDay));
        break;
      case 'openingDay':
        filteredDraws.sort((a, b) => new Date(a.openingDay) - new Date(b.openingDay));
        break;
      case 'raffleDay':
        filteredDraws.sort((a, b) => new Date(a.closingDay) - new Date(b.closingDay));
        break;
      case 'raffleValue':
        // TODO -> edit to sort based on items total price
        filteredDraws.sort((a, b) => new Date(a.openingDay) - new Date(b.openingDay));
        break;
    }

    if(filterData) {

      setFilteredDraws(draws.filter(draw => {
        const matchLocation = selectedLocation === 'none' || draw.location === filterData.location;
        const matchCategory = selectedCategory === 'none' || draw.category === filterData.category;
        
        return matchLocation && matchCategory;
      }));  

    }
  }, [sortData, filterData]);

  return { 
    state,
    component: { 
      Filter: () => <DrawFilter enable={isFilterOpen} submit={onSubmitFilter}/>,
      Sort: () => <DrawSort enable={isSortOpen} handleSort={onSubmitSort} selectedItem={sortData}/>,
      FilterButtons: () => 
        <FilterIcons 
          isFilterOpen={isFilterOpen} isSortOpen={isSortOpen}
          toggleFilter={toggleFilter} toggleSort={toggleSort} 
        />,
    },
    filteredDraws
  };
}

export default useDrawsFilters;