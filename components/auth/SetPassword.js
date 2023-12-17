import React from "react";

import CustomInput from "../general/CustomInput";
import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { inputTypes } from "../../utils/constants/data/inputTypes";

const SetPassword = ({disabled, control, handleSubmit, required}) => {
  return (
    <>
      <CustomTitle text="Enter a new password" size={3} />
      <CustomInput control={control} name="password" rules={required && { required: "Required field" }} type={inputTypes.newPassword} />
      <CustomInput control={control} name="confirmPassword" title="confirm password" rules={required && { required: "Required field" }} type={inputTypes.newPassword} />
      <CustomButton title="Submit" onPress={handleSubmit} disabled={disabled} />
    </>
  )
};

export default SetPassword;
