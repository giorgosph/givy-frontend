import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useForm } from 'react-hook-form';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { PIXELS } from '../../utils/constants/styles/dimensions';
import { TEXT_COLOR } from '../../utils/constants/styles/colors';
import { LoginFormType } from '../../utils/constants/data/formTypes';
import { usernameValidationLogIn } from '../../utils/formValidations';
import { DefaultProfileTabParamList } from '../../utils/navigation/types';
import { autoComplete as AC } from '../../utils/constants/data/autoComplete';

/* --------- Types --------- */
type PropsType = {
  loading: boolean; 
  logIn: (formData: LoginFormType) => void;
  navigation: NativeStackNavigationProp<DefaultProfileTabParamList, "Auth", undefined>;
};

/* ------------------------- */

const Login = (props: PropsType) => {
  const { loading, logIn, navigation } = props;
  const { control, handleSubmit, clearErrors } = useForm<LoginFormType>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  
  // TODO -> Prevent alert twice when both controls are errornously submitted
  // TODO -> May be create a new form with one Controler instead of using 2 CustomInputs (2 Controllers)
  // refer to useFrom docs for more information
  const formError = () => {
    alert('Wrong Credentials $');
    clearErrors(); // !! Throws warning
  };

  return (
    <> 
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
        <CustomInput control={control} name="username" rules={usernameValidationLogIn} autoComplete={AC.username} clearErrors={formError} />
        <CustomInput control={control} name="password"  autoComplete={AC.currentPassword}  />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton title='submit' disabled={loading} onPress={handleSubmit(logIn)} />
        <CustomButton 
          title='forgot password?'
          disabled={loading} 
          style={styles.secondaryButton}
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
  },
  secondaryButtonText: {
    fontSize: 12,
    color: TEXT_COLOR,
  }
});

export default Login;