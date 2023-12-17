import React from "react";

import CustomInput from "../general/CustomInput";
import CustomButton from "../general/CustomButton";

import { inputTypes } from "../../utils/constants/data/inputTypes";
import CustomTitle from "../general/CustomTitle";


const SetPassword = ({disabled, control, handleSubmit, required}) => {
  return (
    <>
      <CustomTitle text="Enter a new password" size={3} />
      <CustomInput control={control} name="password" rules={required && { required: "Required field" }} type={inputTypes.newPassword} />
      <CustomInput control={control} name="confirmPassword" rules={required && { required: "Required field" }} type={inputTypes.newPassword} />
      <CustomButton title="Submit" onPress={handleSubmit} disabled={disabled} />
    </>
  )
};

export default SetPassword;
