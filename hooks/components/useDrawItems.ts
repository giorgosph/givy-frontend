import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import useModal from "../useModal";
import useWebSocket from "../useWebSocket";
import useAxiosFetch from "../useAxiosFetch";
import useTimeRemaining from "../useTimeRemaining";

import { RootState } from "../../redux/rootReducer";
import { optIn } from "../../redux/slices/userSlice";
import { addItems } from "../../redux/slices/drawSlice";

import log from "../../utils/logger";
import { WSWinType } from "../../utils/types/wsType";
import { DrawType } from "../../utils/types/objectTypes";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { includeByDrawID } from "../../utils/filters/drawFilters";
import { DRAW_ITEMS_EP, OPT_IN_EP } from "../../utils/constants/url";
import { DrawItemsResponseType } from "../../utils/types/responseTypes";
import { Animated } from "react-native";
import Toast from "react-native-root-toast";

/* ----------------------------------------------------------------
 * ----------- Use to fetch Items or opt in for a Draw  -----------
 * ---------------------------------------------------------------- */

const useDrawItems = (draw: DrawType) => {
  const [itemsFetched, setItemsFetched] = useState(false);

  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<DrawItemsResponseType>();

  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0)).current;

  const { wsData } = useWebSocket<WSWinType>();
  const { visible, setVisible, renderWinnerModal } = useModal();

  const closingDate = new Date(draw.closingDate);
  // TODO -> move to component to avoid rereners and test if it is efficient
  // NOTE -> I made a change to useTimeRemaining and it may work fine now
  const { timeRemaining } = useTimeRemaining({ closingDate });

  // Get Items and User Draws
  const dispatch = useDispatch();
  const drawItems = useSelector((state: RootState) => state.draw.items); // All items fetched
  const userDraws = useSelector((state: RootState) => state.user.draws);

  // Get images for current draw
  const images = [draw.imagePath];
  const items = includeByDrawID(drawItems, [draw.id]); // Items for current draw
  items.map((item) => images.push(item.imagePath));

  const opted = !!userDraws && userDraws.includes(draw.id); // Checks if user has opted in to current draw

  /* --------------- Callbacks --------------- */

  const fetchItems = async () =>
    await fetchAPI({ type: "get", endpoint: `${DRAW_ITEMS_EP}${draw.id}` });

  const handleOptIn = async () => {
    // ?? pop up ad
    await fetchAPI({
      type: "post",
      endpoint: OPT_IN_EP,
      body: { drawId: draw.id },
      authHeader: true,
    });
  };

  const startAnimation = () => {
    progress.setValue(0);

    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const finishAnimation = () => {
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  /* ----------------------------------------- */

  useEffect(() => {
    if (status === apiStatus.IDLE && !itemsFetched) fetchItems();
    else if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        if ("drawId" in data.body) {
          Toast.show("You have been registered successfully!\nGood Luck!!", {
            duration: 4000,
          });
          navigation.goBack();
          dispatch(optIn({ drawId: data.body.drawId }));
        } else {
          setItemsFetched(true);
          dispatch(addItems({ items: data.body }));
        }
      }
    } else if (status === apiStatus.ERROR && !!statusCode) {
      log({ type: "e", message: `Unexpected error:\n ${data}` });
      alert(
        "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
      );
    }
  }, [data, status]);

  useEffect(() => {
    timeRemaining.expired && startAnimation();
  }, [timeRemaining.expired]);

  useEffect(() => {
    log({ type: "d", message: `wsData:\n ${wsData}` });
    if (wsData?.type === "runningDraws") {
      if (wsData.body.drawId === draw.id) {
        // Display the winners
        setVisible({ items, winners: wsData.body.winners });
        finishAnimation();
        // TODO -> If this user is the winner set it to redux state (userSlice.setWinner)
        // TODO -> Navigate user to searchTab or back
      }
    }
  }, [wsData]);

  return {
    state: {
      reqStatus: status,
      modal: { visible, setVisible },
    },
    callback: {
      handleOptIn,
      renderWinnerModal,
    },
    items,
    images,
    opted,
    timeRemaining,
    progress,
  };
};

export default useDrawItems;
