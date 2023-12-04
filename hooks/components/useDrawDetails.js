import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';

import { auth } from '../../utils/APIs/headers';
import { optIn } from '../../redux/slices/userSlice';
import { setItems } from '../../redux/slices/drawSlice';
import { DRAW_ITEMS_EP, OPT_IN_EP } from '../../utils/constants/url';

const useDrawDetails = (draw) => {
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  const images = [draw.imagePath];
  let items;

  const drawItems = useSelector(state => state.draw.items);

  if(drawItems) {
    items = drawItems.filter(item => item.drawId === draw.id);
    items && items.map(item => images.push(item.imagePath));
  } 
  
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOptIn = async (drawId) => {
    // ?? pop up ad
    await fetchAPI('post', OPT_IN_EP,  { drawId }, config);
  }

  useEffect(() => {
    const fetchItems = async (drawId) => await fetchAPI('get', `${DRAW_ITEMS_EP}${drawId}`);

    if(!loading && !error) {
      if(!data && !items) fetchItems(draw.id);

      if(data.success) {
        if(data.body?.drawId){
          alert("You have successfully been registered to the draw!\nGood Luck!!");
          navigation.goBack();
          dispatch(optIn({ drawId: data.body.drawId }));

          // clear loading, error, data, state 
        } else {
          dispatch(setItems({ items: data.body }));
          // clear loading, error, data, state 
        }
      } else if(data) alert(data.message);
    }

    // do not abort opt in request if user leave the component
  }, [data, loading, error]);

  return { loading, error, items, images, handleOptIn };
}

export default useDrawDetails;