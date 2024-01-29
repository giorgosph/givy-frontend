import { useContext, useEffect } from 'react';

import useModal from '../useModal';
import { useDispatch } from 'react-redux';

import useAxiosFetch from '../useAxiosFetch';
import { SubmitHandler } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthContext } from '../../context/store';
import { setUser } from '../../redux/slices/userSlice';

import { apiStatus } from '../../utils/constants/data/apiStatus';
import { mobileInfo } from '../../utils/constants/data/modalInfo';
import { DefaultProfileTabParamList } from '../../utils/navigation/types';
import { FP_EP, LOGIN_EP, RP_EP, SIGNUP_EP } from '../../utils/constants/url';
import { confirmationTypes as CT } from '../../utils/constants/data/confirmationTypes';
import { ForgotPassFormType, LoginFormType, ResetPassFormType, SignupFormType } from '../../utils/constants/data/formTypes';

/* --------------------------------------------------------------
 * ------------------- Use for Authentication -------------------
 * -------------------------------------------------------------- */

const useAuth = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<DefaultProfileTabParamList, "Auth", undefined>>();
  const authCtx = useContext(AuthContext);
  
  const { setVisible, renderModal } = useModal();
  const { fetchAPI, data, status, statusCode } = useAxiosFetch();

  const logIn: SubmitHandler<LoginFormType> = async (formData) => await fetchAPI({ type: 'put', endpoint: LOGIN_EP, body: formData });

  const signUp: SubmitHandler<SignupFormType> = async (formData) => {
    const { password, confirmPassword } = formData;

    if(password !== confirmPassword) return alert("Passwords do not match!");
    await fetchAPI({ type: 'post', endpoint: SIGNUP_EP,  body: formData});
  };

  const resetPassword: SubmitHandler<ResetPassFormType> = async (formData) => {
    const { password, confirmPassword } = formData;

    if(password !== confirmPassword) return alert("Passwords do not match!");
    await fetchAPI({ type: 'put', endpoint: RP_EP, body: formData, authHeader: true });
  };

  const forgotPassword: SubmitHandler<ForgotPassFormType> = async (formData) => {
    const { code, password, confirmPassword } = formData;

    if(!code) return alert("Invalid confirmation code");
    if(!password || password !== confirmPassword) return alert("Passwords do not match!");

    await fetchAPI({ type: 'put', endpoint: FP_EP, body: formData });
  };

  useEffect(() => {
    if(status === apiStatus.SUCCESS) {
      // TODO -> change data.success with statusCode checks
      if(data.success) {
        const token = data?.token;
        const user = data.body?.user;
        const emailConfirmed = data.body.confirmed?.email;
        const mobileConfirmed = data.body.confirmed?.mobile;
        
        // Coming from forgot/reset password
        data.body?.pass && alert("Password changed successfully!");  

        // TODO -> if mobile provided && data.body.confirmed.mobile == false then set user to mobile not confirmed
        token && authCtx.holdToken(token);
        user && dispatch(setUser({ user }));

        // User's email is confirmed
        if(emailConfirmed) { 

          const modalInfo = mobileInfo(navigation, () => authCtx.authenticate(authCtx.tempToken));
          mobileConfirmed ? authCtx.authenticate(token) : setVisible(modalInfo); 
      
        } else if(emailConfirmed == false) navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
        else navigation.goBack(); // Coming from reset password
        
      } else if(data.body?.type) alert(`${data.body.type} is already registered!`);

    } else if(status === apiStatus.ERROR) {
      if(statusCode === 401) alert("Wrong Credentials");
    }
  }, [status]);

  return { 
    state: {
      reqStatus: status,
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