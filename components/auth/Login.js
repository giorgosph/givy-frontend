import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { useForm } from 'react-hook-form';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { PIXELS } from '../../utils/constants/styles/dimensions';
import { inputTypes as it } from '../../utils/constants/data/inputTypes';

const Login = (props) => {
  const { loading, logIn } = props;
  const { control, handleSubmit } = useForm();

  return (
    <> 
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
        {/* Add regex rules */}
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} type={it.username} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} type={it.currentPassword} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit(logIn)}
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