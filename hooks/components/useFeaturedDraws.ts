import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useAxiosFetch from "../useAxiosFetch";
import { RootState } from "../../redux/rootReducer";
import { setFeaturedDraws } from "../../redux/slices/drawSlice";

import log from "../../utils/logger";
import { DrawType } from "../../utils/types/objectTypes";
import { refetchPerDays } from "../../utils/APIs/refetch";
import { FEATURED_DRAWS_EP } from "../../utils/constants/url";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { DrawsResponseType } from "../../utils/types/responseTypes";

/* -----------------------------------------------------------
 * --------------- Use to fetch Featured Draws ---------------
 * ----------------------------------------------------------- */

const useFeaturedDraws = () => {
  const [draws, setDraws] = useState<DrawType[]>();

  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<DrawsResponseType>();

  const dispatch = useDispatch();
  const draw = useSelector((state: RootState) => state.draw.feauturedDraws);

  // TODO -> research for better algorithm
  // Check if draws were fetched more than 1 day ago to refetch
  const refetch = refetchPerDays(draw.date);

  const fecthData = async () =>
    await fetchAPI({ type: "get", endpoint: FEATURED_DRAWS_EP });

  useEffect(() => {
    if (status === apiStatus.IDLE && refetch) fecthData();
    else if (status === apiStatus.SUCCESS) {
      if (data?.success) setDraws(data.body);
      dispatch(
        setFeaturedDraws({ draws: data.body, date: new Date().getTime() })
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
    draws,
  };
};

export default useFeaturedDraws;
