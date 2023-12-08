import { useContext, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import useAxiosFetch from '../useAxiosFetch';

import { AuthContext } from '../../context/store';
import { setUser } from '../../redux/slices/userSlice';
import { LOGIN_EP, SIGNUP_EP } from '../../utils/constants/url';

const useAuth = () => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const logIn = async (formData) => await fetchAPI('put', LOGIN_EP,  formData);

  const signUp = async (formData) => await fetchAPI('post', SIGNUP_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        alert(data.message);
        authCtx.authenticate(data.body.token);
        dispatch(setUser({ user: data.body.user, date: new Date().getTime() }));
      } else if(data.body?.type) alert(`${data.body.type} is already registered!`);
      else if(data) alert(data.message);
    }
  }, [data, loading, error]);

  return { 
    state: {
      api: { loading, error } 
    },
    callback: { logIn, signUp }
    // TODO -> confirm account 
  };
}

export default useAuth;