import { useEffect, useContext, useState } from "react";

import { AuthContext } from "../../context/store";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";

import { addItems } from "../../redux/slices/drawSlice";
import { setUserDraws } from "../../redux/slices/userSlice";

import { USER_DRAWS_EP } from "../../utils/constants/url";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { clientTabs, defaultTabs } from "../../utils/navigation/tabs";

/* --------------------------------------------------------
 * --------------- Use to set initial state ---------------
 * -------------------------------------------------------- */

const useNavigator = () => {
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const { fetchAPI, resetAxiosState, data, status } = useAxiosFetch();
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch()

  const user = useSelector(state => state.user);

  // TODO -> research for a better algorithm
  // Check if draws were fetched more than 1 day ago to refetch
  const refetch = refetchPerDays(user.date);

  const fetchUserDraws = async () => await fetchAPI({type: 'get', endpoint: USER_DRAWS_EP, authHeader: true });

  useEffect(() => {
    if(authCtx.isAuthenticated) {

      if(status === apiStatus.IDLE) {
        setTabsToRender(clientTabs());
        if(refetch) fetchUserDraws();
      } else if(status === apiStatus.SUCCESS) {
        dispatch(addItems({ items: data.body.wins })); 
        dispatch(setUserDraws({ drawIds: data.body.draws, wins: data.body.wins, date: new Date().getTime() }));
        resetAxiosState();
      }

    } else setTabsToRender(defaultTabs());
  }, [authCtx.isAuthenticated, status]);

  return { tabsToRender }
}

export default useNavigator;
