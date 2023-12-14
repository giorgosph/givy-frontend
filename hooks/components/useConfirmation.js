import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../utils/APIs/headers';
import { CONFIRM_EP, EMAIL_CODE_EP, MOBILE_CODE_EP } from '../../utils/constants/url';

/* ----------------------------------------------------------------
 * --------------- Use for email/phone confirmation ---------------
 * ---------------------------------------------------------------- */

const useConfirmation = () => {
  const [code, setCode] = useState();

  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { fetchAPI, data, loading, status, error } = useAxiosFetch();

  const confirmAccount = async email => await fetchAPI('delete', CONFIRM_EP, { code, type: email ? 'email' : 'mobile' }, config);

  const resend = async email => await fetchAPI('put', email ? EMAIL_CODE_EP : MOBILE_CODE_EP, null, config);

  useEffect(() => {
    if(!loading && !error) {

      if(data.success) {
        const isEmail = data.body?.confirm == 'email'; // email has been confirmed
        const isMobile = data.body?.confirm == 'mobile'; // mobile has been confirmed

        if(data.body?.type) alert(`${data.body.type} sent successfully!`);
        else if(isEmail) {
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

  const setText = (email) => {
    const buttonTitle = email ? "Resend email" : "Resend sms";
    const title = email ? "confirm your email address" : "confirm your phone number";
    const text = email ? "We have send you a confirmation code.\nIf you can't find the email kindly check your junk folder." : "We have send you a confirmation code.";
    
    return { buttonTitle, title, text };
  };

  return { 
    state: {
      api: { loading, error },
      confirmation: { code, setCode },
    },
    callback: { setText, confirmAccount, resend }
  };
}

export default useConfirmation;