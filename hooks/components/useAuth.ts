import { useContext, useEffect } from "react";

import { HttpStatusCode } from "axios";
import { useDispatch } from "react-redux";
import Toast from "react-native-root-toast";
import { SubmitHandler } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useModal from "../useModal";
import useAxiosFetch from "../useAxiosFetch";
import { AuthContext } from "../../context/store";
import { setUser } from "../../redux/slices/userSlice";

import log from "../../utils/logger";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { mobileInfo } from "../../utils/constants/data/modalInfo";
import { AuthResponseType } from "../../utils/types/responseTypes";
import { DefaultProfileTabParamList } from "../../utils/navigation/types";
import { FP_EP, LOGIN_EP, RP_EP, SIGNUP_EP } from "../../utils/constants/url";
import { confirmationTypes as CT } from "../../utils/constants/data/confirmationTypes";
import {
  ForgotPassFormType,
  LoginFormType,
  ResetPassFormType,
  SignupFormType,
} from "../../utils/constants/data/formTypes";
import { registerForPushNotifications } from "../../utils/pushNotification";

/* --------------------------------------------------------------
 * ------------------- Use for Authentication -------------------
 * -------------------------------------------------------------- */

const useAuth = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<DefaultProfileTabParamList, "Auth">
    >();
  const authCtx = useContext(AuthContext);

  const { setVisible, renderModal } = useModal();
  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<AuthResponseType>();

  const logIn: SubmitHandler<LoginFormType> = async (formData) =>
    await fetchAPI({ type: "put", endpoint: LOGIN_EP, body: formData });

  const signUp: SubmitHandler<SignupFormType> = async (formData) => {
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) return alert("Passwords do not match!");
    await fetchAPI({ type: "post", endpoint: SIGNUP_EP, body: formData });
  };

  const resetPassword: SubmitHandler<ResetPassFormType> = async (formData) => {
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) return alert("Passwords do not match!");
    await fetchAPI({
      type: "put",
      endpoint: RP_EP,
      body: formData,
      authHeader: true,
    });
  };

  const forgotPassword: SubmitHandler<ForgotPassFormType> = async (
    formData
  ) => {
    const { code, password, confirmPassword } = formData;

    if (!code) return alert("Invalid confirmation code");
    if (!password || password !== confirmPassword)
      return alert("Passwords do not match!");

    await fetchAPI({ type: "put", endpoint: FP_EP, body: formData });
  };

  useEffect(() => {
    if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        const token = data.token;
        const user = data.body?.user;
        const emailConfirmed = data.body.confirmed?.email;
        const mobileConfirmed = data.body.confirmed?.mobile;

        // Coming from forgot/reset password
        data.body?.pass && Toast.show("Password changed successfully!");

        // TODO -> if mobile provided && data.body.confirmed.mobile == false then set user to mobile not confirmed
        authCtx.holdToken(token);
        user && dispatch(setUser({ user }));

        // User's email is confirmed
        if (emailConfirmed) {
          const modalInfo = mobileInfo(navigation, () =>
            authCtx.authenticate(token)
          );

          if (mobileConfirmed) {
            registerForPushNotifications(token);
            authCtx.authenticate(token);
          } else setVisible(modalInfo);
        } else if (emailConfirmed == false)
          navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
        else navigation.goBack(); // Coming from reset password
      }
    } else if (status === apiStatus.ERROR) {
      if (!data?.success) {
        if (
          statusCode === HttpStatusCode.Unauthorized ||
          statusCode === HttpStatusCode.Conflict
        )
          alert(data!.message);
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
    callback: {
      logIn,
      signUp,
      resetPassword,
      forgotPassword,
      renderModal,
    },
  };
};

export default useAuth;
