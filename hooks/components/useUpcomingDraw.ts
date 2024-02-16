import { useEffect, useState } from "react";
import useAxiosFetch from "../useAxiosFetch";
import useTimeRemaining from "../useTimeRemaining";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/rootReducer";
import {
  addBestDraw,
  addItems,
  removeBestDraw,
} from "../../redux/slices/drawSlice";

import log from "../../utils/logger";
import { BEST_DRAW_EP, DRAWS_EP } from "../../utils/constants/url";
import { DrawType, ItemType } from "../../utils/types/objectTypes";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { BestDrawResponseType } from "../../utils/types/responseTypes";
import {
  getHighestPricedItem,
  includeByDrawID,
} from "../../utils/filters/drawFilters";

/* ---------------------------------------------------------
 * --------------- Use to fetch/handle Draws ---------------
 * --------------------------------------------------------- */

const useUpcomingDraw = () => {
  const [bestDraw, setBestDraw] = useState<DrawType>();
  const [bestItem, setBestItem] = useState<ItemType>();

  const { fetchAPI, data, status, statusCode, resetAxiosState } =
    useAxiosFetch<BestDrawResponseType>();

  const dispatch = useDispatch();
  const draw = useSelector((state: RootState) => state.draw);

  const closingDate = new Date(draw.bestDraw?.closingDate);
  const { timeRemaining } = useTimeRemaining({ closingDate });

  const fecthData = async () =>
    await fetchAPI({ type: "get", endpoint: BEST_DRAW_EP });

  useEffect(() => {
    if (!!draw.bestDraw && timeRemaining.expired) {
      dispatch(removeBestDraw());
      resetAxiosState();
    } else if (draw.bestDraw) {
      const items = includeByDrawID(draw.items, [draw.bestDraw.id]);
      setBestItem(getHighestPricedItem(items) as ItemType);
    }
  }, [timeRemaining, timeRemaining.expired]);

  useEffect(() => {
    if (status === apiStatus.IDLE && !draw.bestDraw) fecthData();
    else if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        setBestDraw(data.body.draw);
        dispatch(addBestDraw({ draw: data.body.draw }));
        dispatch(addItems({ items: data.body.items }));
      }
    } else if (status === apiStatus.ERROR && !!statusCode) {
      log({ type: "e", message: `Unexpected error:\n ${data}` });
      alert(
        "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
      );
    }

    // TODO -> abort request if user leave the component
  }, [status]);

  return {
    state: {
      reqStatus: status,
    },
    bestDraw,
    bestItem,
    timeRemaining,
  };
};

export default useUpcomingDraw;
