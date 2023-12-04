import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAxiosFetch from '../useAxiosFetch';

import { DRAWS_EP } from '../../utils/constants/url';
import { setDraws } from '../../redux/slices/drawSlice';

const useDrawList = () => {
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  const dispatch = useDispatch();
  const draw = useSelector(state => state.draw);

  // Check if draws where fetched more than 1 day ago to refetch
  // TODO -> research for better algorithm
  const currentDate = new Date();
  const savedDate = new Date(draw.date);
  savedDate.setDate(savedDate.getDate() + 1);

  const refetch = currentDate > savedDate; 

  useEffect(() => {
    const fecthData = async () => await fetchAPI('get', DRAWS_EP);

    if(!loading && !error) {
      if(refetch && !data) fecthData();
      
      if(data?.success) {
        dispatch(setDraws({ draws: data.body, date: new Date().getTime() }));
        // clear loading, error, data, state 
      }
    }

    // abort request if user leave the component and clear api state
  }, [data, loading, error]);

  return { loading, error, draws: draw.draws };
}

export default useDrawList;