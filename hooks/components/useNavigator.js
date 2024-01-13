import * as SplashScreen from "expo-splash-screen";
import { useEffect, useContext, useState, useCallback } from "react";

import { AuthContext } from "../../context/store";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";

import { addItems } from "../../redux/slices/drawSlice";
import { setUserDraws } from "../../redux/slices/userSlice";

import { auth } from "../../utils/APIs/headers";
import { USER_DRAWS_EP } from "../../utils/constants/url";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { clientTabs, defaultTabs } from "../../utils/navigation/tabs";

/* --------------------------------------------------------
 * --------------- Use to set initial state ---------------
 * -------------------------------------------------------- */

const useNavigator = () => {
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const { fetchAPI, data, status, statusCode } = useAxiosFetch();
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const dispatch = useDispatch()

  const user = useSelector(state => state.user);

  // TODO -> research for better algorithm
  // Check if draws were fetched more than 1 day ago to refetch
  const refetch = refetchPerDays(user.date);

  const fetchUserDraws = async () => await fetchAPI('get', USER_DRAWS_EP, null, config);

  useEffect(() => {
    if(authCtx.isAuthenticated) {

      if(status === apiStatus.IDLE) {
        setTabsToRender(clientTabs());
        if(refetch) fetchUserDraws();
      } else if(status === apiStatus.SUCCESS) {
        dispatch(addItems({ items: data.body.wins })); 
        dispatch(setUserDraws({ drawIds: data.body.draws, wins: data.body.wins, date: new Date().getTime() }));
      } else if(status === apiStatus.ERROR) alert("Server Error!\nKindly Contact Support Team");

    } else setTabsToRender(defaultTabs());
  }, [authCtx.isAuthenticated, status]);

  const onLayoutRootView = useCallback(async () => {
    if (!status === apiStatus.LOADING) await SplashScreen.hideAsync();
    else await SplashScreen.preventAutoHideAsync();
  }, [status]);

  return { tabsToRender, onLayoutRootView }
}

export default useNavigator;