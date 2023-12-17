import { useContext, useEffect } from 'react';

import useModal from '../useModal';
import { useDispatch } from 'react-redux';
import useAxiosFetch from '../useAxiosFetch';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/store';
import { setUser } from '../../redux/slices/userSlice';

import { auth } from '../../utils/APIs/headers';
import { mobileInfo } from '../../utils/constants/data/modalInfo';
import { FP_EP, LOGIN_EP, RP_EP, SIGNUP_EP } from '../../utils/constants/url';
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

  const config = auth(authCtx.token);

  const logIn = async (formData) => await fetchAPI('put', LOGIN_EP,  formData);

  const signUp = async (formData) => await fetchAPI('post', SIGNUP_EP,  formData);

  const resetPassword = async (formData) => {
    const { password, confirmPassword } = formData;

    if(password !== confirmPassword) return alert("Passwords do not match!");
    await fetchAPI('put', RP_EP, formData, config);
  }

  const forgotPassword = async (formData) => {
    const { code, password, confirmPassword } = formData;

    if(!code) return alert("Invalid confirmation code");
    if(!password || password !== confirmPassword) return alert("Passwords do not match!");

    await fetchAPI('put', FP_EP, formData);
  }

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        const token = data?.token;
        const user = data.body?.user;
        const emailConfirmed = data.body.confirmed?.email;
        const mobileConfirmed = data.body.confirmed?.mobile;
        
        // Coming from forgot/reset password
        data.body?.pass && alert("Password changed successfully!");  

        // TODO -> if mobile provided && data.body.confirmed.mobile == false then set user to mobile not confirmed
        token && authCtx.holdToken(token);
        user && dispatch(setUser({ user, date: new Date().getTime() }));

        // User's email is confirmed
        if(emailConfirmed) { 
          mobileConfirmed ? authCtx.authenticate(token) : setVisible(modalInfo); 
          
        } else if(emailConfirmed == false) navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
        else navigation.goBack(); // Coming from reset password
        
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
    callback: { 
      logIn, 
      signUp, 
      resetPassword,
      forgotPassword, 
      renderModal 
    }
  };
}

export default useAuth;