import { useContext, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import useAxiosFetch from '../useAxiosFetch';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/store';
import { setUser } from '../../redux/slices/userSlice';
import { LOGIN_EP, SIGNUP_EP } from '../../utils/constants/url';

/* --------------------------------------------------------------
 * ------------------- Use for Authentication -------------------
 * -------------------------------------------------------------- */

const useAuth = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const logIn = async (formData) => await fetchAPI('put', LOGIN_EP,  formData);

  const signUp = async (formData) => await fetchAPI('post', SIGNUP_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        dispatch(setUser({ user: data.body.user, date: new Date().getTime() }));

        if(data.body.confirmed.email) {
          authCtx.authenticate(data.body.token);
          if(!data.body.confirmed.mobile) ; // modal to navigate to mobile confirmation
        } else {
          authCtx.holdToken(data.body.token);
          navigation.navigate("AccountConfirmation", { email: true });
        } 

      } else if(data.body?.type) alert(`${data.body.type} is already registered!`);
      else if(data) alert(data.message);
    } 
  }, [data, loading, error]);

  return { 
    state: {
      api: { loading, error }
    },
    callback: { logIn, signUp }
  };
}

export default useAuth;