import React from "react";
import { Control, useForm } from "react-hook-form";

import SetPassword from "../../components/auth/SetPassword";
import CustomTitle from "../../components/general/CustomTitle";
import CustomInput from "../../components/general/CustomInput";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import useAuth from "../../hooks/components/useAuth";
import useNotification from "../../hooks/useNotification";

import { EMAIL_FP_EP } from "../../utils/constants/url";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { ForgotPassFormType, ResetPassFormType } from "../../utils/constants/data/formTypes";
import { confirmationCodeValidation, emailRegex, required } from "../../utils/formValidations";

const title = "Please enter your email address";

const ForgotPasswordScreen = () => {
  const { state, callback } = useAuth();
  const { state: notificationState, sent, callback: notificationCallback } = useNotification();
  const loading = state.reqStatus === apiStatus.LOADING || notificationState.reqStatus === apiStatus.LOADING;

  // TODO -> needs testing due to complexity of Types
  const { control, handleSubmit, clearErrors } = useForm<ForgotPassFormType>({ mode: 'onBlur', reValidateMode: 'onSubmit' });

  const buttonTitle = sent ? "Resend Email" : "Send Email";
  const sendEmail = (formData: ForgotPassFormType) => notificationCallback.sendNotification({ endpoint: EMAIL_FP_EP, body: { email: formData.email } });

  const formError = () => {
    alert("Invalid Confirmation Code");
    clearErrors();
  };

  return (
    <>
      {callback.renderModal()}
      <CustomHeader title="Forgot Password" />
      <MainContainer centered>
          <CustomTitle text={title} />
          <CustomInput control={control} name="email" rules={{ ...required, ...emailRegex }} autoComplete={AC.email} inputMode="email" />
          <CustomButton title={buttonTitle} onPress={handleSubmit(sendEmail)} disabled={loading} />
          {sent && 
            <>
              <CustomInput control={control} name="code" title="confirmation code" rules={confirmationCodeValidation} autoComplete={AC.oneTimeCode} inputMode="numeric" clearErrors={formError} />
              <SetPassword disabled={loading} control={control as Control<ResetPassFormType>} handleSubmit={handleSubmit(callback.forgotPassword)} />
            </>
          }
      </MainContainer>
   </>
  )
};

export default ForgotPasswordScreen;