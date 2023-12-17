import React from "react";

import { useForm } from "react-hook-form";
import useAuth from "../../hooks/components/useAuth";

import SetPassword from "../../components/auth/SetPassword";
import CustomHeader from "../../components/general/CustomHeader";
import MainContainer from "../../components/general/MainContainer";

const ResetPasswordScreen = () => {
  const { state, callback } = useAuth();
  const { control, handleSubmit } = useForm();

  const { loading } = state.api;

  return (
    <>
      <CustomHeader title="Reset Password" />
      <MainContainer centered>
        <SetPassword disabled={loading} control={control} handleSubmit={handleSubmit(callback.resetPassword)} required />
      </MainContainer>
    </>
  )
};

export default ResetPasswordScreen;
