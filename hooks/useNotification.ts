import { useEffect, useState } from 'react';

import useAxiosFetch from './useAxiosFetch';

import { apiStatus } from '../utils/constants/data/apiStatus';
import { CONTACT_US_EP, FEEDBACK_EP } from '../utils/constants/url';

/* ------------------------------------------------------------------
 * -------- Use for sending notifications (email, sms, etc.) --------
 * ------------------------------------------------------------------ */

/* --------- Types --------- */
type NotificationPropsType = {
  endpoint: string;
  body?: object;
  authHeader?: boolean;
};

/* ------------------------- */

const useNotification = () => {
  const [sent, setSent] = useState(false);

  const { fetchAPI, data, status, statusCode } = useAxiosFetch();

  const sendNotification = async (props: NotificationPropsType) => {
    const { endpoint, body={}, authHeader=false } = props;

    setSent(false);
    await fetchAPI({ type: 'put', endpoint, body, authHeader });
  };

  const contactUs = async (formData) => await fetchAPI({ type: 'post', endpoint: CONTACT_US_EP, body: formData, authHeader: true });

  const feedback = async (formData) => await fetchAPI({ type: 'post', endpoint: FEEDBACK_EP, body: formData, authHeader: true });

  useEffect(() => {
    if(status === apiStatus.SUCCESS) {
      setSent(true);
      alert(`${data.body.type} sent successfully!`);
    } else if(status === apiStatus.ERROR) {
      if(statusCode == 401) alert(`${data.body.type} cannot be sent!`);
      else if(statusCode == 409) alert("You are not allowed to submit a feedback more than once a day.");
    }
  }, [status]);

  // TODO -> add callback object and move sent to state object
  
  return { 
    state: {
      reqStatus: status, 
    },
    callback: {
      sendNotification, contactUs, feedback
    },
    sent
  };
}

export default useNotification;