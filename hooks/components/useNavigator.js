import * as SplashScreen from "expo-splash-screen";
import { useEffect, useContext, useState, useCallback } from "react";

import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/store";

import useAxiosFetch from "../useAxiosFetch";
import { auth } from "../../utils/APIs/headers";
import { setUserDraws } from "../../redux/slices/userSlice";
import { clientTabs, defaultTabs } from "../../utils/navigation/tabs";
import { USER_DRAWS_EP } from "../../utils/constants/url";
import { setDraws } from "../../redux/slices/drawSlice";

const useNavigator = () => {
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const { fetchAPI, data, loading, error, status } = useAxiosFetch();
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const dispatch = useDispatch()

  useEffect(() => {
    const userChange = async () => {
      if (authCtx.isAuthenticated) {
        // if (authCtx.isAdmin) {
        //   // TODO: render adminDetails
        //   setTabsToRender(renderAdminTabs(Tab));
        // } else {
        if(!loading && !error) {
          setTabsToRender(clientTabs());

          // TODO -> check last date of fetched data before fetching again ??
          if(!data && status != 204) await fetchAPI('get', USER_DRAWS_EP, null, config);

          if(data.success) {
            dispatch(setUserDraws({ drawIds: data.body.draws, wins: data.body.wins }));
            // do not provide date as we need to fetch draws later
            dispatch(setDraws({ draws: data.body.wins, date: null })); 
          } 
        }
        // }
      } else setTabsToRender(defaultTabs());
    };

    userChange();
  }, [authCtx.isAuthenticated, loading, error, data]);

  const onLayoutRootView = useCallback(async () => {
    if (!loading) await SplashScreen.hideAsync();
    else await SplashScreen.preventAutoHideAsync();
  }, [loading]);

  return { tabsToRender, onLayoutRootView }
}

export default useNavigator;