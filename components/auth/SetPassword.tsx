import React from "react";
import { Control, SubmitHandler } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { passwordValidation, required } from "../../utils/formValidations";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { ResetPassFormType } from "../../utils/constants/data/formTypes";
import { GestureResponderEvent } from "react-native";

/* --------- Types --------- */
type PropsType = {
  disabled: boolean; 
  control: Control<ResetPassFormType>;
  handleSubmit: (e: GestureResponderEvent) => Promise<any>; // TODO -> Check for better definition
};

/* ------------------------- */

const SetPassword = (props: PropsType) => {
  const { disabled, control, handleSubmit } = props;

  return (
    <>
      <CustomTitle text="Enter a new password" size={3} />
      <CustomInput control={control} name="password" rules={passwordValidation} autoComplete={AC.newPassword} />
      {/* TODO -> add at least all input check to confirm password */}
      <CustomInput control={control} name="confirmPassword" title="confirm password" rules={required} autoComplete={AC.newPassword} />
      <CustomButton title="Submit" onPress={handleSubmit} disabled={disabled} />
    </>
  )
};

export default SetPassword;
