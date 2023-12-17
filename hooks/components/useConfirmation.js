import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../utils/APIs/headers';
import { CONFIRM_EP, EMAIL_CODE_EP, MOBILE_CODE_EP } from '../../utils/constants/url';
import useNotification from '../useNotification';

/* ----------------------------------------------------------------
 * --------------- Use for email/phone confirmation ---------------
 * ---------------------------------------------------------------- */

const useConfirmation = () => {
  const [code, setCode] = useState();

  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { loading: sending, sendNotification } = useNotification();
  const { fetchAPI, data, loading, status, error } = useAxiosFetch();

  const confirmAccount = async type => await fetchAPI('delete', CONFIRM_EP, { code, type }, config);

  useEffect(() => {
    if(!loading && !error) {

      if(data.success) {
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

      } 
      
    } else if(status == 401) alert("Wrong code provided!");
    else if(status == 500) alert(data.message);

  }, [data, loading, error]);

  return { 
    state: {
      api: { loading, sending, error },
      confirmation: { code, setCode },
    },
    callback: { 
      confirmAccount, 
      resend: (type) => sendNotification(type == 'email' ? EMAIL_CODE_EP : MOBILE_CODE_EP),
    }
  };
}

export default useConfirmation;