import { useEffect } from "react";

import useAxiosFetch from "../useAxiosFetch";
import { useDispatch, useSelector } from "react-redux";

import { DRAWS_EP } from "../../utils/constants/url";
import { setDraws } from "../../redux/slices/drawSlice";
import { optedIn } from "../../utils/filters/drawFilters";
import { refetchPerDays } from "../../utils/APIs/refetch";

const useMyDraws = () => {
  const dispatch = useDispatch()
  const { data, loading, error, fetchAPI } = useAxiosFetch();

  const draw = useSelector(state => state.draw);
  const userDraws = useSelector(state => state.user.draws);

  const refetch = refetchPerDays(draw.date); 
  const draws = optedIn(draw.draws, userDraws);

  const onPress = () => navigation.navigate("ClientSearchTab");


  useEffect(() => {
    const fecthData = async () => await fetchAPI('get', DRAWS_EP);

    if(!loading && !error) {
      if(refetch && !data) fecthData();
      
      if(data?.success) {
        dispatch(setDraws({ draws: data.body, date: new Date().getTime() }));
      }
    }
  }, [data, loading, error]);

  return {draws, onPress}
}

export default useMyDraws;