import { useContext, useEffect } from 'react';

import useModal from '../useModal';
import { useDispatch } from 'react-redux';
import useAxiosFetch from '../useAxiosFetch';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/store';
import { setUser } from '../../redux/slices/userSlice';

import { FP_EP, LOGIN_EP, SIGNUP_EP } from '../../utils/constants/url';
import { mobileInfo } from '../../utils/constants/data/modalInfo';
import { confirmationTypes as CT } from '../../utils/constants/data/confirmationTypes';

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

  const forgotPassword = async (formData) => {
    const { code, password, confirmPassword } = formData;

    if(!code) return alert("Invalid confirmation code");
    if(!password || password !== confirmPassword) return alert("Passwords do not match!");

    await fetchAPI('put', FP_EP, formData);
  }

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        // TODO -> if mobile provided && data.body.confirmed.mobile == false then set user to mobile not confirmed
        authCtx.holdToken(data.token);
        dispatch(setUser({ user: data.body.user, date: new Date().getTime() }));

        if(data.body?.pass) alert("Password changed successfully!"); // coming from forgot password 

        // User's email is already confirmed
        if(data.body.confirmed.email) { 

          if(!data.body.confirmed.mobile) setVisible(modalInfo); // pending mobile confirmation
          else authCtx.authenticate(data.token); // Log in the user

        } else navigation.navigate("AccountConfirmation", { type: CT.EMAIL }); // pending email confirmation

      } else if(data.body?.type) alert(`${data.body.type} is already registered!`);
      else if(data) alert(data.message);
    } 
  }, [data, loading, error]);

  /* --------------------------------------------------------------------------------- */

  const modalInfo = mobileInfo(navigation, () => authCtx.authenticate(authCtx.tempToken));

  return { 
    state: {
      api: { loading, error },
    },
    callback: { logIn, signUp, forgotPassword, renderModal }
  };
}

export default useAuth;