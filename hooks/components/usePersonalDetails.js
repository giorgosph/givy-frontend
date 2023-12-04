import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';

import { auth } from '../../utils/APIs/headers';
import { setUser } from '../../redux/slices/userSlice';
import { USER_DETAILS_EP } from '../../utils/constants/url';

const usePersonalDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const [editShipping, setEditShipping] = useState(false);

  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);

  useEffect(() => {
    const fecthData = async () => await fetchAPI('get', USER_DETAILS_EP,  null, config);
    
    if(!loading && !error) {
      if(!user && !data) fecthData();

      if(data?.success) {
        dispatch(setUser({ user: data.body, date: new Date().getTime() }));
        // clear loading, error, data, state 
      }
    }

    // abort request if user leave the component  and clear api state
  }, [data, loading, error]);

  return { 
    loading, error, user,
    edit: { 
      contact: editContact, setContact: setEditContact,
      shipping: editShipping, setShipping: setEditShipping
    },
  };
}

export default usePersonalDetails;