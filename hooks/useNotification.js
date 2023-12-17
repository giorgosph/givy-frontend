import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from './useAxiosFetch';
import { AuthContext } from '../context/store';

import { auth } from '../utils/APIs/headers';

/* ------------------------------------------------------------------
 * -------- Use for sending notifications (email, sms, etc.) --------
 * ------------------------------------------------------------------ */

const useNotification = () => {
  const [sent, setSent] = useState(false);

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.tempToken || authCtx.token);

  const { fetchAPI, data, loading, status, error } = useAxiosFetch();

  const sendNotification = async (endpoint, body = null) => {
    setSent(false);
    await fetchAPI('put', endpoint, body, !body && config);
  }

  useEffect(() => {
    if(!loading && !error) {

      if(data.success) {
        setSent(true);
        alert(`${data.body.type} sent successfully!`);
      }
      
    } else if(status == 401) alert(`${data.body.type} cannot be sent!`);
    else if(status == 500) alert(data.message);

  }, [data, loading, error]);

  return { loading, error, sent, sendNotification };
}

export default useNotification;