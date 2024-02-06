import { useEffect, useState } from "react";

import { HttpStatusCode } from "axios";
import useAxiosFetch from "./useAxiosFetch";

import log from "../utils/logger";
import { apiStatus } from "../utils/constants/data/apiStatus";
import { CONTACT_US_EP, FEEDBACK_EP } from "../utils/constants/url";
import { NotificationResponseType } from "../utils/types/responseTypes";
import {
  ContactUsFromType,
  FeedbackFormType,
} from "../utils/constants/data/formTypes";

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

  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<NotificationResponseType>();

  const sendNotification = async (props: NotificationPropsType) => {
    const { endpoint, body = {}, authHeader = false } = props;

    setSent(false);
    await fetchAPI({ type: "put", endpoint, body, authHeader });
  };

  const contactUs = async (formData: ContactUsFromType) =>
    await fetchAPI({
      type: "post",
      endpoint: CONTACT_US_EP,
      body: formData,
      authHeader: true,
    });

  const feedback = async (formData: FeedbackFormType) =>
    await fetchAPI({
      type: "post",
      endpoint: FEEDBACK_EP,
      body: formData,
      authHeader: true,
    });

  useEffect(() => {
    if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        setSent(true);
        alert(`${data.body.type} sent successfully!`);
      }
    } else if (status === apiStatus.ERROR) {
      if (!data?.success) {
        if (statusCode == HttpStatusCode.Unauthorized)
          alert("`Email cannot be sent!`");
        else if (statusCode == HttpStatusCode.Conflict)
          alert(
            "You are not allowed to submit a feedback more than once a day."
          );
      } else {
        log({ type: "e", message: `Unexpected error:\n ${data}` });
        alert(
          "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
        );
      }
    }
  }, [status]);

  // TODO -> add callback object and move sent to state object

  return {
    state: {
      reqStatus: status,
    },
    callback: {
      sendNotification,
      contactUs,
      feedback,
    },
    sent,
  };
};

export default useNotification;
