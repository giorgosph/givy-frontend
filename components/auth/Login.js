import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, ScrollView, View } from 'react-native';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { PIXELS } from '../../utils/styles/dimensions';

const Login = () => {
  const [isDisabled, setIsDisabled] = useState([false, 1]);

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setIsDisabled([true, 0.4]);
    console.log("onSubmit LOGIN:", data);
    // add login logic
    setIsDisabled([false, 1]);
  }

  return (
    <> 
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
        {/* Add regex rules */}
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={isDisabled[0]} 
          style={{opacity: isDisabled[1]}}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
   </>
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

export default Login;