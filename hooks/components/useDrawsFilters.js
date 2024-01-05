import { useEffect, useState } from 'react';

import DrawSort from '../../components/draw/DrawSort';
import DrawFilter from '../../components/draw/DrawFilter';
import FilterIcons from '../../components/draw/FilterIcons';

import useDraws from './useDraws';
import isEqual from '../../utils/isEqual';


/* --------------------------------------------------------
 * --------------- Use to filter/sort Draws ---------------
 * -------------------------------------------------------- */

const useDrawsFilters = () => {  
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortData, setSortData] = useState('default');
  const [filteredDraws, setFilteredDraws] = useState(false);

  const { state, draws } = useDraws();

  const toggleSort = () => setIsSortOpen(!isSortOpen);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const onSubmitFilter = (data) => {
    setIsFilterOpen(false);
    setFilteredDraws(data); 
  }; 

  const onSubmitSort = (formData) => {
    setIsSortOpen(false);
    setSortData(formData);
  };
  
  useEffect(() => {
    if(filteredDraws && filteredDraws.length > 0) {
      let sortedDraws = [...filteredDraws];
          
      switch (sortData) {
        case 'default':
        case 'openingDay':
          sortedDraws.sort((a, b) => new Date(a.openingDate) - new Date(b.openingDate));
          break;
        case 'closingDay':
          sortedDraws.sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate));
          break;
        case 'raffleValue':
          // TODO: Add logic to sort based on item total price
          break;
        default:
          break;
      }
    
      if(!isEqual(sortedDraws, filteredDraws)) setFilteredDraws(sortedDraws);
    }
  }, [sortData, filteredDraws]);
  
  useEffect(() => {
    if(draws && draws.length > 0) setFilteredDraws(draws);
  }, [draws]);

  return { 
    state,
    component: { 
      Filter: () => <DrawFilter enable={isFilterOpen} onSubmit={onSubmitFilter} draws={draws} />,
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