import { useEffect, useContext, useState } from "react";

import { AuthContext } from "../context/store";
import { clientTabs, defaultTabs } from "../utils/navigation/tabs";

const useNavigator = () => {
  const [appIsReady, setAppIsReady] = useState(true);
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const authCtx = useContext(AuthContext);

  console.log("User logged in: ", authCtx.isAuthenticated);

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

  return { tabsToRender, appIsReady }
}

export default useNavigator;