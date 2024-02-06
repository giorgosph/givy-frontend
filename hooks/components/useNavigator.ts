import { useEffect, useContext, useState } from "react";

import { AuthContext } from "../../context/store";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";

import { RootState } from "../../redux/rootReducer";
import { addItems } from "../../redux/slices/drawSlice";
import { setUserDraws } from "../../redux/slices/userSlice";

import log from "../../utils/logger";
import { USER_DRAWS_EP } from "../../utils/constants/url";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { clientTabs, defaultTabs } from "../../utils/navigation/tabs";
import { UserDrawsResponseType } from "../../utils/types/responseTypes";

/* --------------------------------------------------------
 * --------------- Use to set initial state ---------------
 * -------------------------------------------------------- */

const useNavigator = () => {
  const [tabsToRender, setTabsToRender] = useState(defaultTabs());

  const { fetchAPI, resetAxiosState, data, status } =
    useAxiosFetch<UserDrawsResponseType>();

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  // TODO -> research for a better algorithm
  // Check if draws were fetched more than 1 day ago to refetch
  const refetch = refetchPerDays(user.date);

  const fetchUserDraws = async () =>
    await fetchAPI({ type: "get", endpoint: USER_DRAWS_EP, authHeader: true });

  useEffect(() => {
    if (authCtx.isAuthenticated) {
      if (status === apiStatus.IDLE) {
        setTabsToRender(clientTabs());
        if (refetch) fetchUserDraws();
      } else if (status === apiStatus.SUCCESS && !!data) {
        if (data?.success) {
          dispatch(addItems({ items: data.body.wins }));
          dispatch(
            setUserDraws({
              drawIds: data.body.draws,
              wins: data.body.wins,
              date: new Date().getTime(),
            })
          );
          resetAxiosState();
        }
      } else if (status === apiStatus.ERROR) {
        log({ type: "e", message: `Unexpected error:\n ${data}` });
        alert(
          "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
        );
      }
    } else setTabsToRender(defaultTabs());
  }, [authCtx.isAuthenticated, status]);

  return { tabsToRender };
};

export default useNavigator;
