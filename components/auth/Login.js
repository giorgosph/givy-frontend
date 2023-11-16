import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';

import { PIXELS } from '../../utils/constants/styles/dimensions';

import useLogin from '../../hooks/components/useLogin';

const Login = () => {
  const { loading, error, control, handleSubmit } = useLogin();

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <> 
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
        {/* Add regex rules */}
        <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
        <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit()}
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