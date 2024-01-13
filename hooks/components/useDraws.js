import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAxiosFetch from '../useAxiosFetch';

import { DRAWS_EP } from '../../utils/constants/url';
import { addDraws } from '../../redux/slices/drawSlice';
import { refetchPerDays } from '../../utils/APIs/refetch';
import { apiStatus } from '../../utils/constants/data/apiStatus';
import { excludeByID, includeByID } from '../../utils/filters/drawFilters';

/* ---------------------------------------------------------
 * --------------- Use to fetch/handle Draws ---------------
 * --------------------------------------------------------- */

const useDraws = () => {
  const [draws, setDraws] = useState(false);
  const [userDraws, setUserDraws] = useState(false);

  const { fetchAPI, data, status } = useAxiosFetch();
  
  const dispatch = useDispatch();
  const draw = useSelector(state => state.draw);
  const user = useSelector(state => state.user);
  
  // TODO -> research for better algorithm
  // Check if draws were fetched more than 1 day ago to refetch
  const refetch = refetchPerDays(draw.date);

  const fecthData = async () => await fetchAPI('get', DRAWS_EP);

  useEffect(() => {
      setDraws(excludeByID(draw.draws, user.draws)); // not opted in
      setUserDraws(includeByID(draw.draws, user.draws)); // opted in
  }, [draw.draws, user.draws]);

  useEffect(() => {

    if(status === apiStatus.IDLE && refetch) fecthData(); // TODO -> investigate best solution
    else if(status === apiStatus.SUCCESS) {
      if(data?.success) {
        dispatch(addDraws({ draws: data.body, date: new Date().getTime() }));
      }
    } else if(status === apiStatus.ERROR) alert("Server Error!\nKindly Contact Support Team");

    // abort request if user leave the component and clear api state
  }, [status]);

  return { 
    state: {
      reqStatus: status
    },
    draws, userDraws
  };
}

export default useDraws;