import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';

import { auth } from '../../utils/APIs/headers';
import { optIn } from '../../redux/slices/userSlice';
import { addItems } from '../../redux/slices/drawSlice';
import { DRAW_ITEMS_EP, OPT_IN_EP } from '../../utils/constants/url';
import { includeByDrawID } from '../../utils/filters/drawFilters';

const useDrawItems = (draw) => {
  const { fetchAPI, data, loading, error, status } = useAxiosFetch();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const navigation = useNavigation();
  
  const dispatch = useDispatch();
  const drawItems = useSelector(state => state.draw.items); // All items fetched
  
  const images = [draw.imagePath];
  const items = includeByDrawID(drawItems, [draw.id]) // Items for current draw
  items.map(item => images.push(item.imagePath));
  
  const fetchItems = async (drawId) => await fetchAPI('get', `${DRAW_ITEMS_EP}${drawId}`);

  const handleOptIn = async (drawId) => {
    // ?? pop up ad
    await fetchAPI('post', OPT_IN_EP,  { drawId }, config);
  }

  
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

  return { 
    state: {
      api: loading, error
    },
    callback: {
      handleOptIn 
    },
    items, images 
  };
}

export default useDrawItems;