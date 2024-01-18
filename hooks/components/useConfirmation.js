import { useContext, useEffect } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import useNotification from '../useNotification';

import { AuthContext } from '../../context/store';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../utils/APIs/headers';
import { apiStatus } from '../../utils/constants/data/apiStatus';
import { CONFIRM_EP, EMAIL_CODE_EP, MOBILE_CODE_EP } from '../../utils/constants/url';

/* ----------------------------------------------------------------
 * --------------- Use for email/phone confirmation ---------------
 * ---------------------------------------------------------------- */

const useConfirmation = () => {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { fetchAPI, data, status, statusCode } = useAxiosFetch();
  const { state: notificationState, callback } = useNotification();

  const confirmAccount = async (type, formData) => {
    const { code } = formData;
    
    console.log("Account Confirmation Code:", code);
    await fetchAPI('delete', CONFIRM_EP, { code, type }, config);
  }

  const resend = type => callback.sendNotification(type == 'email' ? EMAIL_CODE_EP : MOBILE_CODE_EP);

  useEffect(() => {
    if(status === apiStatus.SUCCESS) {

      const isEmail = data.body?.confirm == 'email'; // email has been confirmed
      const isMobile = data.body?.confirm == 'mobile'; // mobile has been confirmed

      if(isEmail) {
        authCtx.authenticate(authCtx.tempToken);
        alert("Email Address Confirmed Successfully!");
      } else if(isMobile) {
        // TODO -> Edit userSlice, set phone confirmed to true
        navigation.goBack();
        alert("Phone Number Confirmed Successfully!");
      }
      
    } else if(status === apiStatus.ERROR) {
      if(statusCode == 401) alert("Wrong code provided!");
      else alert("Server Error!\nKindly Contact Support Team");
    }
  }, [status]);

  return { 
    state: {
      reqStatus: status,
    },
    notificationState,
    callback: { 
      resend,
      confirmAccount, 
    }
  };
}

export default useConfirmation;