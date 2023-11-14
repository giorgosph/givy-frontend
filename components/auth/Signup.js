import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { isAndroid } from '../../utils/device';
import { PIXELS } from '../../utils/styles/dimensions';

const Signup = () => {
  const [isDisabled, setIsDisabled] = useState([false, 1]);

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setIsDisabled([true, 0.4]);
    console.log("onSubmit SIGNUP:", data);
    // add login logic
    setIsDisabled([false, 1]);
  }

  return (
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        {/* Add regex rules */}
        <CustomInput control={control} name="full name" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="email" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="confirm password" rules={{ required: "Required field" }} />
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={isDisabled[0]} 
          style={{opacity: isDisabled[1]}}
          onPress={handleSubmit(onSubmit)}
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