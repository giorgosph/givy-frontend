import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import useTimeRemaining from '../useTimeRemaining';

import { optIn } from '../../redux/slices/userSlice';
import { addItems } from '../../redux/slices/drawSlice';

import { auth } from '../../utils/APIs/headers';
import { includeByDrawID } from '../../utils/filters/drawFilters';
import { DRAW_ITEMS_EP, OPT_IN_EP } from '../../utils/constants/url';

/* ----------------------------------------------------------------
 * ----------- Use to fetch Items or opt in for a Draw  -----------
 * ---------------------------------------------------------------- */

const useDrawItems = (draw) => {
  const { fetchAPI, data, loading, error, status } = useAxiosFetch();

  // Initialization
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const navigation = useNavigation();

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

  const fetchItems = async (drawId) => await fetchAPI('get', `${DRAW_ITEMS_EP}${drawId}`);

  const handleOptIn = async (drawId) => {
    // ?? pop up ad
    await fetchAPI('post', OPT_IN_EP,  { drawId }, config);
  }

  /* ----------------------------------------- */
  
  useEffect(() => {
    if(!loading && !error) {
      if(!status && items.length == 0) fetchItems(draw.id);

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
      // TODO -> run animation until it receives a web socket to display the winner
      // then navigate to search or goBack (?)
      console.log("Animation starting...");
    }
  }, [timeRemaining.expired])

  return { 
    state: {
      api: loading, error
    },
    callback: {
      handleOptIn 
    },
    items, images, opted, timeRemaining
  };
}

export default useDrawItems;