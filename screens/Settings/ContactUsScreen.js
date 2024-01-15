import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { useForm } from 'react-hook-form';

import CustomInput from '../../components/general/CustomInput';
import CustomButton from '../../components/general/CustomButton';
import CustomHeader from '../../components/general/CustomHeader';
import MainContainer from '../../components/general/MainContainer';

import { allInputsRegex, maxLength, required } from '../../utils/formValidations';

const ContactUsScreen = () => {
  const { control, formState, handleSubmit, reset  } = useForm();
  const { isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <CustomHeader title="Contact Us" />
      <MainContainer centered>

        <CustomInput 
          control={control} 
          name="title" 
          rules={{...allInputsRegex, ...required, ...maxLength(20)}} 
        />

        {/* TODO -> implement extra styles for Custom input to make body section bigger */}
        {/* TODO -> add option to display character limit with current characters */}
        <CustomInput 
          control={control} 
          name="body" 
          rules={{...allInputsRegex, ...required, ...maxLength(200)}} 
        />
        {/* <Text style={styles.characterLimit}>{`${field.value?.length || 0}/50`}</Text> */}

        <CustomButton title="Send Email" onPress={handleSubmit(onSubmit)} disabled={!isDirty || !isValid} />
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  characterLimit: {
    alignSelf: 'flex-end',
    color: 'gray',
    fontSize: 12,
  },
});

export default ContactUsScreen;
