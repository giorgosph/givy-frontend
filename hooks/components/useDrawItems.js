import { useContext, useEffect } from 'react';

import { AuthContext } from '../../context/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useWebSocket from '../useWebSocket';
import useAxiosFetch from '../useAxiosFetch';
import useTimeRemaining from '../useTimeRemaining';

import { optIn } from '../../redux/slices/userSlice';
import { addItems } from '../../redux/slices/drawSlice';

import { auth } from '../../utils/APIs/headers';
import { includeByDrawID } from '../../utils/filters/drawFilters';
import { DRAW_ITEMS_EP, OPT_IN_EP } from '../../utils/constants/url';
import useModal from '../useModal';

/* ----------------------------------------------------------------
 * ----------- Use to fetch Items or opt in for a Draw  -----------
 * ---------------------------------------------------------------- */

const useDrawItems = (draw) => {
  const { fetchAPI, data, loading, error, status } = useAxiosFetch();

  // Initialization
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const navigation = useNavigation();

  const { wsData } = useWebSocket();
  const { visible, setVisible, renderWinnerModal } = useModal();
  const { timeRemaining } = useTimeRemaining(draw.closingDate);
  
  // Get Items and User Draws
  const dispatch = useDispatch();
  const drawItems = useSelector(state => state.draw.items); // All items fetched
  const userDraws = useSelector(state => state.user.draw);
  
  // Get images for current draw
  const images = [draw.imagePath];
  const items = includeByDrawID(drawItems, [draw.id]) // Items for current draw
  items.map(item => images.push(item.imagePath));

  const opted = !!userDraws && userDraws.includes(draw.id); // Checks if user has opted in to current draw 
  
  /* --------------- Callbacks --------------- */

  const fetchItems = async () => await fetchAPI('get', `${DRAW_ITEMS_EP}${draw.id}`);

  const handleOptIn = async () => {
    // ?? pop up ad
    await fetchAPI('post', OPT_IN_EP,  { drawId: draw.id }, config);
  }

  /* ----------------------------------------- */
  
  useEffect(() => {
    if(!loading && !error) {
      if(!status && items.length == 0) fetchItems();

      if(data.success) {
        if(data.body.drawId) {
          alert("You have successfully been registered to the draw!\nGood Luck!!");
          navigation.goBack();
          dispatch(optIn({ drawId: data.body.drawId }));

          // clear loading, error, data, state 
        } else if(data.body) {
          dispatch(addItems({ items: data.body }));
          // clear loading, error, data, state 
        }
      }
    }

    // do not abort opt in request if user leave the component
  }, [data, loading, error]);

  useEffect(() => {
    if(timeRemaining.expired) {
      // TODO -> run animation
      console.log("Animation starting...");
    }
  }, [timeRemaining.expired]);

  useEffect(() => {
    console.log("wsData:\n", wsData);
    if(wsData?.type == "runningDraws") {
      if(wsData.body.drawId == draw.id) {
        // Stop animation
        // Display the winners
        setVisible({items, winners: wsData.body.winners});
        // Navigate user to searchTab or back
      }
    }
  }, [wsData])

  return { 
    state: {
      api: { loading, error },
      modal: { visible, setVisible },
    },
    callback: {
      handleOptIn,
      renderWinnerModal, 
    },
    items, images, opted, timeRemaining
  };
}

export default useDrawItems;