import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useWebSocket from '../useWebSocket';
import useAxiosFetch from '../useAxiosFetch';
import useTimeRemaining from '../useTimeRemaining';

import { optIn } from '../../redux/slices/userSlice';
import { addItems } from '../../redux/slices/drawSlice';

import log from '../../utils/logger';
import { apiStatus } from '../../utils/constants/data/apiStatus';
import { includeByDrawID } from '../../utils/filters/drawFilters';
import { DRAW_ITEMS_EP, OPT_IN_EP } from '../../utils/constants/url';

import useModal from '../useModal';

/* ----------------------------------------------------------------
 * ----------- Use to fetch Items or opt in for a Draw  -----------
 * ---------------------------------------------------------------- */

const useDrawItems = (draw) => {
  const [itemsFetched, setItemsFetched] = useState(false);

  const { fetchAPI, data, status, statusCode } = useAxiosFetch();

  const navigation = useNavigation();

  const { wsData } = useWebSocket();
  const { visible, setVisible, renderWinnerModal } = useModal();
  const { timeRemaining } = useTimeRemaining(draw.closingDate); // TODO -> move to component to avoid rereners and test if it is efficient
  
  // Get Items and User Draws
  const dispatch = useDispatch();
  const drawItems = useSelector(state => state.draw.items); // All items fetched
  const userDraws = useSelector(state => state.user.draws);
  
  // Get images for current draw
  const images = [draw.imagePath];
  const items = includeByDrawID(drawItems, [draw.id]) // Items for current draw
  items.map(item => images.push(item.imagePath));

  const opted = !!userDraws && userDraws.includes(draw.id); // Checks if user has opted in to current draw 
  
  /* --------------- Callbacks --------------- */

  const fetchItems = async () => await fetchAPI('get', `${DRAW_ITEMS_EP}${draw.id}`);

  const handleOptIn = async () => {
    // ?? pop up ad
    await fetchAPI('post', OPT_IN_EP,  { drawId: draw.id }, true);
  }

  /* ----------------------------------------- */
  
  useEffect(() => {
    if(status === apiStatus.IDLE && !itemsFetched) fetchItems();
    else if(status === apiStatus.SUCCESS) {

      if(data.body.drawId) {
        alert("You have successfully been registered to the draw!\nGood Luck!!");
        navigation.goBack();
        dispatch(optIn({ drawId: data.body.drawId }));
      } else if(data.body) {
        setItemsFetched(true);
        dispatch(addItems({ items: data.body }));
      }
      
    } 

  }, [data, status]);

  useEffect(() => {
    if(timeRemaining.expired) {
      // TODO -> run animation
      log('d', 'Animation starting ...');
    }
  }, [timeRemaining.expired]);

  useEffect(() => {
    log('d', `wsData:\n ${wsData}`);
    if(wsData?.type == "runningDraws") {
      if(wsData.body.drawId == draw.id) {
        // Stop animation
        // Display the winners
        setVisible({items, winners: wsData.body.winners});
        // If this user is the winner set it to redux state (userSlice.setWinner)
        // Navigate user to searchTab or back
      }
    }
  }, [wsData])

  return { 
    state: {
      reqStatus: status,
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