import { useContext, useEffect } from "react";

import useAxiosFetch from "../useAxiosFetch";
import useNotification from "../useNotification";

import { HttpStatusCode } from "axios";
import Toast from "react-native-root-toast";
import { AuthContext } from "../../context/store";
import { useNavigation } from "@react-navigation/native";

import log from "../../utils/logger";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import {
  CONFIRM_EP,
  EMAIL_CODE_EP,
  MOBILE_CODE_EP,
} from "../../utils/constants/url";
import { ConfirmAccountResponseType } from "../../utils/types/responseTypes";
import { ConfirmationCodeFromType } from "../../utils/constants/data/formTypes";
import { ConfirmationValueType } from "../../utils/constants/data/confirmationTypes";

/* ----------------------------------------------------------------
 * --------------- Use for email/phone confirmation ---------------
 * ---------------------------------------------------------------- */

const useConfirmation = () => {
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);

  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<ConfirmAccountResponseType>();
  const { state: notificationState, callback } = useNotification();

  const confirmAccount = async (
    type: ConfirmationValueType,
    formData: ConfirmationCodeFromType
  ) => {
    await fetchAPI({
      type: "delete",
      endpoint: CONFIRM_EP,
      body: { code: formData.code, type },
      authHeader: true,
    });
  };

  const resend = (type: ConfirmationValueType) =>
    callback.sendNotification({
      endpoint: type == "email" ? EMAIL_CODE_EP : MOBILE_CODE_EP,
      authHeader: true,
    });

  useEffect(() => {
    if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        const isEmail = data.body.confirm === "email"; // email has been confirmed
        const isMobile = data.body.confirm === "mobile"; // mobile has been confirmed

        if (isEmail) {
          authCtx.authenticate(authCtx.tempToken as string);
          Toast.show("Email Address Confirmed Successfully!");
        } else if (isMobile) {
          // TODO -> Edit userSlice, set phone confirmed to true
          navigation.goBack();
          Toast.show("Phone Number Confirmed Successfully!");
        }
      }
    } else if (status === apiStatus.ERROR) {
      if (!data?.success) {
        if (statusCode == HttpStatusCode.Unauthorized)
          alert("Wrong code provided!");
      } else if (!!statusCode) {
        log({ type: "e", message: `Unexpected error:\n ${data}` });
        alert(
          "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
        );
      }
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
    },
  };
};

export default useConfirmation;
