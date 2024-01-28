import React from "react";

import { useForm } from "react-hook-form";
import useAuth from "../../hooks/components/useAuth";

import SetPassword from "../../components/auth/SetPassword";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

import { apiStatus } from "../../utils/constants/data/apiStatus";
import { ResetPassFormType } from "../../utils/constants/data/formTypes";

const ResetPasswordScreen = () => {
  const { state, callback } = useAuth();
  const loading = state.reqStatus === apiStatus.LOADING;

  const { control, handleSubmit } = useForm<ResetPassFormType>();

  return (
    <>
      <CustomHeader title="Reset Password" />
      <MainContainer centered>
        <SetPassword disabled={loading} control={control} handleSubmit={handleSubmit(callback.resetPassword)} />
      </MainContainer>
    </>
  )
};

export default ResetPasswordScreen;
