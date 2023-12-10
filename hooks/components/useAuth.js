import { useContext, useEffect } from 'react';

import useModal from '../useModal';
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
  
  const { setVisible, renderModal } = useModal();
  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const logIn = async (formData) => await fetchAPI('put', LOGIN_EP,  formData);

  const signUp = async (formData) => await fetchAPI('post', SIGNUP_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        dispatch(setUser({ user: data.body.user, date: new Date().getTime() }));

        // User's email is already confirmed
        if(data.body.confirmed.email) { 
          
          if(!data.body.confirmed.mobile) setVisible(true); // pending mobile confirmation
          else authCtx.authenticate(data.body.token); // Log in the user
        } else {
          authCtx.holdToken(data.body.token);
          navigation.navigate("AccountConfirmation", { email: true });
        } 

      } else if(data.body?.type) alert(`${data.body.type} is already registered!`);
      else if(data) alert(data.message);
    } 
  }, [data, loading, error]);

  /* --------------------------------------------------------------------------------- */

  const modalInfo = {
    title: "Phone Number Confirmation",
    text: "We are asking to confirm your phone number in order to notify you when you have won or contact you for delivery instructions.",
    buttonText: "Confirm",
    buttonText2: "Not Now",
    onPress: () => navigation.navigate("AccountConfirmation", { email: false }),
    onPress2: () => authCtx.authenticate(data.body.token)
  };

  return { 
    state: {
      api: { loading, error },
    },
    callback: { logIn, signUp, renderModal: ()=> renderModal(modalInfo) }
  };
}

export default useAuth;