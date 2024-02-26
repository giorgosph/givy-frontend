import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";
import { RootState } from "../../redux/rootReducer";
import { setTopWinners } from "../../redux/slices/userSlice";

import log from "../../utils/logger";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { FEATURED_DRAWS_EP, TOP_WINNERS_EP } from "../../utils/constants/url";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { TopWinnersResponseType } from "../../utils/types/responseTypes";

/* --------------------------------------------------------------
 * ------------ Use to fetch Winners for Leaderboard ------------
 * -------------------------------------------------------------- */

const useLeaderboard = () => {
  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<TopWinnersResponseType>();

  const dispatch = useDispatch();
  const topWinners = useSelector((state: RootState) => state.user.topWinners);

  // TODO -> research for better algorithm
  // Check if fetched more than 1 day ago to refetch or refetch if a draw has been finished
  const refetch = refetchPerDays(topWinners.date); // refetch is not working (test by saving a change)

  const fecthData = async () =>
    await fetchAPI({ type: "get", endpoint: TOP_WINNERS_EP });

  useEffect(() => {
    if (status === apiStatus.IDLE && refetch) fecthData();
    else if (status === apiStatus.SUCCESS) {
      if (data?.success)
        dispatch(
          setTopWinners({ topWinners: data.body, date: new Date().getTime() })
        );
    } else if (status === apiStatus.ERROR && !!statusCode) {
      log({ type: "e", message: `Unexpected error:\n ${data}` });
      alert(
        "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
      );
    }
  }, [status]);

  return {
    state: {
      reqStatus: status,
    },
    topWinners: topWinners.users,
  };
};

export default useLeaderboard;
