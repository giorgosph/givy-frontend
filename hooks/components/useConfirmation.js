import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../utils/APIs/headers';
import { CONFIRM_EP, EMAIL_CODE_EP } from '../../utils/constants/url';

/* ----------------------------------------------------------------
 * --------------- Use for email/phone confirmation ---------------
 * ---------------------------------------------------------------- */

const useConfirmation = () => {
  const [code, setCode] = useState();

  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { fetchAPI, data, loading, status, error } = useAxiosFetch();

  const confirmAccount = async (email) => { 
    console.log('Confirmation code:', code);
    await fetchAPI('delete', CONFIRM_EP, { code, type: email ? 'email' : 'mobile' }, config) ;
  };

  const resend = async (email) => {
    email ? 
      await fetchAPI('put', EMAIL_CODE_EP, null, config) 
    : 0 ; // send sms
  }

  useEffect(() => {
    if(!loading && !error) {

      if(data.success) {

        if(data.body?.type) {
          alert(`${data.body.type} sent successfully!`);
        } else {
          authCtx.tempToken && authCtx.authenticate(authCtx.tempToken);
          alert("Confirmed successfully!");
          // navigation.navigate("ClientHomeTab");
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