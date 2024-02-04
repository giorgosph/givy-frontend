import React from "react";
import { View, StyleSheet } from "react-native";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomHeader from "../general/CustomHeader";
import CustomButton from "../general/CustomButton";
import MainContainer from "../general/MainContainer";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { ContactDetailsType } from "../../utils/types/objectTypes";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { ContactDetailsFromType } from "../../utils/constants/data/formTypes";
import { emailRegex, numbersRegex, required } from "../../utils/formValidations";

/* -------- Types -------- */
type PropsType = {
  user: ContactDetailsType;
  loading: boolean; 
  setContact: React.Dispatch<React.SetStateAction<boolean>>; 
  onSubmit: (formData: any) => Promise<void>;
};

/* ----------------------- */

const EditContactDetails = (props: PropsType) => {
  const { user, loading, setContact, onSubmit } = props;

  const { control, reset, handleSubmit } = useForm<ContactDetailsFromType>();

  const onPress = () => {
    reset(); 
    setContact(false);
  };

  return (
    <>
      <CustomHeader title='Contact Details' onPress={onPress}/>
      <MainContainer>
        <View style={styles.container}>
          <CustomInput control={control} name="email" defaultValue={user.email} rules={{ ...required, ...emailRegex }} autoComplete={AC.email} inputMode='email' />
          <CustomInput control={control} name="mobile" title={'phone number'} defaultValue={user.mobile} rules={numbersRegex} autoComplete={AC.tel} inputMode='numeric' /> 
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title='submit' disabled={loading} onPress={handleSubmit(onSubmit)} />
        </View>
      </MainContainer>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    paddingLeft: PIXELS,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EditContactDetails;
