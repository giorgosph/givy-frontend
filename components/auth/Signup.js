import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useForm } from 'react-hook-form';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';
import CustomDropdown from '../general/CustomDropdown';

import { isAndroid } from '../../utils/constants/device';
import { PIXELS } from '../../utils/constants/styles/dimensions';

import genderData from '../../utils/constants/data/dropdown/genderData';
import { inputTypes as IT } from '../../utils/constants/data/inputTypes';

const Signup = (props) => {
  const { loading, signUp } = props;
  const { control, handleSubmit } = useForm();

  return (
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        {/* Add regex rules, add mobile + ext */}
        <CustomInput control={control} name="firstName" title={"first name"} rules={{ required: "Required field" }} type={IT.name} />
        <CustomInput control={control} name="lastName" title={"last name"} rules={{ required: "Required field" }} type={IT.familyName} />
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} type={IT.username} />
        <CustomInput control={control} name="email" rules={{ required: "Required field" }} type={IT.email} inputMode='email' />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} type={IT.newPassword} />
        <CustomInput control={control} name="confPassword" title={"confirm password"} rules={{ required: "Required field" }} type={IT.newPassword} />
        <CustomDropdown control={control} name="gender" rules={{ required: "Required field" }} data={genderData} />
        <CustomInput control={control} name="country" type={IT.country} />
        <CustomInput control={control} name="city" />
        <CustomInput control={control} name="address1" title="address 1" type={IT.addressLine1} />
        <CustomInput control={control} name="address2" title="address 2" type={IT.addressLine2} />
        <CustomInput control={control} name="postalCode" title="postal code" type={IT.postalCode} />
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit(signUp)}
        />
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