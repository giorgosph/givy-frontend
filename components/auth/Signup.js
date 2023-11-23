import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';
import CustomDropdown from '../general/CustomDropdown';

import { isAndroid } from '../../utils/constants/device';
import { PIXELS } from '../../utils/constants/styles/dimensions';
import { inputTypes as it } from '../../utils/constants/data/inputTypes';
import genderData from '../../utils/constants/data/dropdown/genderData';

import useSignup from '../../hooks/components/useSignup';

const Signup = () => {
  const { loading, error, control, handleSubmit } = useSignup();

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        {/* Add regex rules, add mobile + ext */}
        <CustomInput control={control} name="firstName" title={"first name"} rules={{ required: "Required field" }} type={it.name} />
        <CustomInput control={control} name="lastName" title={"last name"} rules={{ required: "Required field" }} type={it.familyName} />
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} type={it.username} />
        <CustomInput control={control} name="email" rules={{ required: "Required field" }} type={it.email} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} type={it.newPassword} />
        <CustomInput control={control} name="confPassword" title={"confirm password"} rules={{ required: "Required field" }} type={it.newPassword} />
        <CustomDropdown control={control} name="gender" rules={{ required: "Required field" }} data={genderData} />
        <CustomInput control={control} name="country" type={it.country} />
        <CustomInput control={control} name="city" />
        <CustomInput control={control} name="address1" title="address 1" type={it.addressLine1} />
        <CustomInput control={control} name="address2" title="address 2" type={it.addressLine2} />
        <CustomInput control={control} name="postalCode" title="postal code" type={it.postalCode} />
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '90%',
    paddingLeft: PIXELS,
  },
  buttonContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Signup;