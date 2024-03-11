import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";
import { RootState } from "../../redux/rootReducer";

import log from "../../utils/logger";
import { DRAWS_EP } from "../../utils/constants/url";
import { addDraws } from "../../redux/slices/drawSlice";
import { DrawType } from "../../utils/types/objectTypes";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { DrawsResponseType } from "../../utils/types/responseTypes";
import { excludeByID, includeByID } from "../../utils/filters/drawFilters";

/* ---------------------------------------------------------
 * --------------- Use to fetch/handle Draws ---------------
 * --------------------------------------------------------- */

const useDraws = () => {
  const [refetch, setRefetch] = useState(true);
  const [draws, setDraws] = useState<DrawType[]>();
  const [userDraws, setUserDraws] = useState<DrawType[]>();

  const { fetchAPI, resetAxiosState, data, status, statusCode } =
    useAxiosFetch<DrawsResponseType>();

  const dispatch = useDispatch();
  const draw = useSelector((state: RootState) => state.draw);
  const user = useSelector((state: RootState) => state.user);

  const fecthData = async () =>
    await fetchAPI({ type: "get", endpoint: DRAWS_EP });

  const hardRefetch = () => {
    resetAxiosState();
    setRefetch(true);
  };

  useEffect(() => {
    setDraws(excludeByID(draw.draws, user.draws)); // not opted in
    setUserDraws(includeByID(draw.draws, user.draws)); // opted in
  }, [draw.draws, user.draws]);

  useEffect(() => {
    if (status === apiStatus.IDLE && refetch)
      fecthData(); // TODO -> investigate best solution
    else if (status === apiStatus.SUCCESS) {
      if (data?.success)
        dispatch(addDraws({ draws: data.body, date: new Date().getTime() }));
    } else if (status === apiStatus.ERROR && !!statusCode) {
      log({ type: "e", message: `Unexpected error:\n ${data}` });
      alert(
        "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
      );
    }

    // TODO -> research for better algorithm
    // Check if draws were fetched more than 1 day ago to refetch
    setRefetch(refetchPerDays(draw.date));

    // TODO -> abort request if user leave the component
  }, [status, refetch]);

  return {
    state: {
      reqStatus: status,
    },
    draws,
    userDraws,
    hardRefetch,
  };
};

export default useDraws;
