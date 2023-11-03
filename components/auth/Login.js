import React, { useState } from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';

import CustomInput from '../general/CustomInput';

const Login = () => {
  const [isDisabled, setIsDisabled] = useState([false, 1]);

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setIsDisabled([true, 0.4]);
    console.log("onSubmit LOGIN:", data);
    // add login logic
    setIsDisabled([false, 1]);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
      {/* Add regex rules */}
      <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
      <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
      <Button 
        disabled={isDisabled[0]} 
        style={{opacity: isDisabled[1]}} 
        onPress={handleSubmit(onSubmit)}
      >Submit</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Login;