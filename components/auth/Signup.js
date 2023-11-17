import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { isAndroid } from '../../utils/constants/device';
import { PIXELS } from '../../utils/constants/styles/dimensions';

import useSignup from '../../hooks/components/useSignup';

const Signup = () => {
  const { loading, error, control, handleSubmit } = useSignup();

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        {/* Add regex rules */}
        <CustomInput control={control} name="fullName" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="email" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="confirmPassword" rules={{ required: "Required field" }} />
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
    height: '80%',
    paddingLeft: PIXELS,
  },
  buttonContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Signup;