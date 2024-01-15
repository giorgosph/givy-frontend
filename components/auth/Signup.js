import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useForm } from 'react-hook-form';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';
import CustomDropdown from '../general/CustomDropdown';

import { isAndroid } from '../../utils/constants/device';

import genderData from '../../utils/constants/data/dropdown/genderData';
import { inputTypes as IT } from '../../utils/constants/data/inputTypes';
import { allInputsRegex, emailRegex, lettersRegex, numbersRegex, passwordValidation, required, usernameValidation, spacesRegex } from '../../utils/formValidations';

const Signup = (props) => {
  const { loading, signUp } = props;
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  return (
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        <CustomInput control={control} name="firstName" title="first name" rules={{ ...required, ...lettersRegex }} type={IT.name} />
        <CustomInput control={control} name="lastName" title="last name" rules={{ ...required, ...lettersRegex }} type={IT.familyName} />
        <CustomInput control={control} name="username" rules={usernameValidation} type={IT.username} />
        <CustomInput control={control} name="email" rules={{ ...required, ...emailRegex }} type={IT.email} inputMode='email' />
        <CustomInput control={control} name="mobile" title="phone number" rules={numbersRegex} type={IT.tel} inputMode='numeric' /> 
        <CustomInput control={control} name="password" rules={passwordValidation} type={IT.newPassword} />
        <CustomInput control={control} name="confirmPassword" title="confirm password" rules={required} type={IT.newPassword} />
        <CustomDropdown control={control} name="gender" rules={{ ...required }} data={genderData} />
        <CustomInput control={control} name="country" rules={lettersRegex} type={IT.country} />
        <CustomInput control={control} name="city" rules={lettersRegex} />
        <CustomInput control={control} name="address1" title="address 1" rules={allInputsRegex} type={IT.addressLine1} />
        <CustomInput control={control} name="address2" title="address 2" rules={allInputsRegex} type={IT.addressLine2} />
        <CustomInput control={control} name="postalCode" title="postal code" rules={allInputsRegex} type={IT.postalCode} />
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton title='submit' disabled={loading} onPress={handleSubmit(signUp)} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Signup;