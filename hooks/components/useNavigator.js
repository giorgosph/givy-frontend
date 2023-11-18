import * as SplashScreen from "expo-splash-screen";
import { useEffect, useContext, useState, useCallback } from "react";

import { AuthContext } from "../../context/store";
import { clientTabs, defaultTabs } from "../../utils/navigation/tabs";

const useNavigator = () => {
  const [appIsReady, setAppIsReady] = useState(true);
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const userChange = async () => {
      if (authCtx.isAuthenticated) {
        // if (authCtx.isVenue) {
        //   // TODO: await render venue details
        //   setTabsToRender(renderVenueTabs(Tab));
        // } else if (authCtx.isAdmin) {
        //   // TODO: render adminDetails
        //   setTabsToRender(renderAdminTabs(Tab));
        // } else {
          // TODO: render client details
          setTabsToRender(clientTabs());
        // }
      } else {
        // TODO: render logged out user
        setTabsToRender(defaultTabs());
      }
      setAppIsReady(true);
    };

    setAppIsReady(false);
    userChange();
  }, [authCtx.isAuthenticated]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
    else await SplashScreen.preventAutoHideAsync();
  }, [appIsReady]);

  return { tabsToRender, onLayoutRootView }
}

export default useNavigator;