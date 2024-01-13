import React from "react";
import { View, StyleSheet } from "react-native";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomHeader from "../general/CustomHeader";
import CustomButton from "../general/CustomButton";
import MainContainer from "../general/MainContainer";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { inputTypes as IT } from "../../utils/constants/data/inputTypes";
import { emailRegex, numbersRegex, required } from "../../utils/formValidations";

const EditContactDetails = (props) => {
  const { user, loading, setContact, onSubmit } = props;

  const { control, reset, handleSubmit } = useForm();

  const onPress = () => {
    reset(); 
    setContact(false);
  };

  return (
    <>
      <CustomHeader title='Contact Details' onPress={onPress}/>
      <MainContainer>
        <View style={styles.container}>
          <CustomInput control={control} name="email" defaultValue={user?.email} rules={{ ...required, ...emailRegex }} type={IT.email} inputMode='email' />
          <CustomInput control={control} name="mobile" title={'phone number'} defaultValue={user?.mobile} rules={numbersRegex} type={IT.tel} inputMode='numeric' /> 
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton 
            title='submit'
            disabled={loading} 
            style={{opacity: loading ? 0.4 : 1}}
            onPress={handleSubmit(onSubmit)}
          />
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
