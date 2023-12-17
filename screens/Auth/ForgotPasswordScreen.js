import React from "react";
import { useForm } from "react-hook-form";

import SetPassword from "../../components/auth/SetPassword";
import CustomTitle from "../../components/general/CustomTitle";
import CustomInput from "../../components/general/CustomInput";
import CustomHeader from "../../components/general/CustomHeader";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import useAuth from "../../hooks/components/useAuth";
import useNotification from "../../hooks/useNotification";

import { EMAIL_FP_EP } from "../../utils/constants/url";
import { inputTypes as IT } from "../../utils/constants/data/inputTypes";

const title = "Please enter your email address"

const ForgotPasswordScreen = () => {
  const { state, callback } = useAuth();
  const { control, handleSubmit } = useForm();
  const { loading: sending, sent, sendNotification } = useNotification();

  const { loading } = state.api;

  const buttonTitle = sent ? "Resend Email" : "Send Email";
  const sendEmail = formData => sendNotification(EMAIL_FP_EP, { email: formData.email });

  return (
   <>
    <CustomHeader title="Forgot Password" />
    <MainContainer centered>
        <CustomTitle text={title} />
        <CustomInput control={control} name="email" rules={{ required: "Required field" }} type={IT.email} inputMode="email" />
        <CustomButton title={buttonTitle} onPress={handleSubmit(sendEmail)} disabled={loading || sending} />
        {sent && 
          <>
            <CustomInput control={control} name="code" title="Confirmation Code" type={IT.oneTimeCode} inputMode="numeric" />
            <SetPassword disabled={loading || sending} control={control} handleSubmit={handleSubmit(callback.forgotPassword)} />
          </>
        }
    </MainContainer>
   </>
  )
};

export default ForgotPasswordScreen;