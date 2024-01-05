import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAxiosFetch from '../useAxiosFetch';

import { DRAWS_EP } from '../../utils/constants/url';
import { addDraws } from '../../redux/slices/drawSlice';
import { refetchPerDays } from '../../utils/APIs/refetch';
import { excludeByID, includeByID } from '../../utils/filters/drawFilters';

/* ---------------------------------------------------------
 * --------------- Use to fetch/handle Draws ---------------
 * --------------------------------------------------------- */

const useDraws = () => {
  const [draws, setDraws] = useState(false);
  const [userDraws, setUserDraws] = useState(false);

  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  const dispatch = useDispatch();
  const draw = useSelector(state => state.draw);
  const user = useSelector(state => state.user);

  // Check if draws were fetched more than 1 day ago to refetch
  // TODO -> research for better algorithm
  const refetch = refetchPerDays(draw.date);

  useEffect(() => {
      setDraws(excludeByID(draw.draws, user.draws)); // not opted in
      setUserDraws(includeByID(draw.draws, user.draws)); // opted in
  }, [draw.draws, user.draws]);

  useEffect(() => {
    const fecthData = async () => await fetchAPI('get', DRAWS_EP);

    if(!loading && !error) {
      if(refetch) fecthData();
      
      if(data?.success) {
        dispatch(addDraws({ draws: data.body, date: new Date().getTime() }));
        // clear loading, error, data, state 
      }
    }

    // abort request if user leave the component and clear api state
  }, [data, loading, error]);

  return { 
    state: {
      api: { loading, error }
    },
    draws, userDraws
  };
}

export default useDraws;