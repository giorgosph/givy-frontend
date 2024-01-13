import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from './useAxiosFetch';
import { AuthContext } from '../context/store';

import { auth } from '../utils/APIs/headers';
import { apiStatus } from '../utils/constants/data/apiStatus';

/* ------------------------------------------------------------------
 * -------- Use for sending notifications (email, sms, etc.) --------
 * ------------------------------------------------------------------ */

const useNotification = () => {
  const [sent, setSent] = useState(false);

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { fetchAPI, data, status, statusCode } = useAxiosFetch();

  const sendNotification = async (endpoint, body = null) => {
    setSent(false);
    await fetchAPI('put', endpoint, body, !body && config);
  }

  useEffect(() => {
    if(status === apiStatus.SUCCESS) {
      setSent(true);
      alert(`${data.body.type} sent successfully!`);
    } else if(status === apiStatus.ERROR) {
      if(statusCode == 401) alert(`${data.body.type} cannot be sent!`);
      else alert("Server Error!\nKindly Contact Support Team");
    }
  }, [status]);

  // TODO -> add callback object and move sent to state object
  
  return { 
    state: {
      reqStatus: status, 
    },
    sent, sendNotification 
  };
}

export default useNotification;