import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { useForm } from 'react-hook-form';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { PIXELS } from '../../utils/constants/styles/dimensions';
import { TEXT_COLOR } from '../../utils/constants/styles/colors';
import { inputTypes as IT } from '../../utils/constants/data/inputTypes';

const Login = (props) => {
  const { loading, logIn, navigation } = props;
  const { control, handleSubmit } = useForm();

  return (
    <> 
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
        {/* Add regex rules */}
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} type={IT.username} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} type={IT.currentPassword} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit(logIn)}
        />
        <CustomButton 
          title='forgot password?'
          disabled={loading} 
          style={{...styles.secondaryButton, opacity: loading ? 0.4 : 1}}
          textStyle={styles.secondaryButtonText}
          onPress={() => navigation.navigate("ForgotPassword")}
        />
      </View>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
  },
  buttonContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButton: {
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: PIXELS / 4,
    backgroundColor: 'transparent',
    // backgroundColor: 'red',
  },
  secondaryButtonText: {
    fontSize: 12,
    color: TEXT_COLOR,
  }
});

export default Login;