import React from "react";

import CustomInput from "../general/CustomInput";
import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { passwordValidation, required } from "../../utils/formValidations";
import { inputTypes as IT } from "../../utils/constants/data/inputTypes";

const SetPassword = ({ disabled, control, handleSubmit }) => {
  return (
    <>
      <CustomTitle text="Enter a new password" size={3} />
      <CustomInput control={control} name="password" rules={passwordValidation} type={IT.newPassword} />
      <CustomInput control={control} name="confirmPassword" title="confirm password" rules={required} type={IT.newPassword} />
      <CustomButton title="Submit" onPress={handleSubmit} disabled={disabled} />
    </>
  )
};

export default SetPassword;
