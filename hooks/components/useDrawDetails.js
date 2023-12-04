import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';

import { auth } from '../../utils/APIs/headers';
import { setUser } from '../../redux/slices/userSlice';
import { OPT_IN_EP } from '../../utils/constants/url';

import drawItem from "../../utils/constants/data/drawItem.json";

const useDrawDetails = () => {
  // get Items from redux where drawId=draw.id

  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  // const user = useSelector(state => state.user.user);
  // const dispatch = useDispatch();

  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);

  const handleOptIn = async (drawId) => {
    // ?? pop up ad
    // send request to server
    await fetchAPI('post', OPT_IN_EP,  { drawId }, config);
  }

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        alert("You have successfully been registered to the draw!\nGood Luck!!");
        navigation.goBack();
         // ?? add to redux/cookies already opted in
        // dispatch(setUser({ draws: data.body.drawId, date: new Date().getTime() }));
        
        // clear loading, error, data, state 
      } else if(data) alert(data.message);
    }

    // do not abort request if user leave the component  and clear api state
  }, [data, loading, error]);

  return { loading, error, drawItem, handleOptIn };
}

export default useDrawDetails;