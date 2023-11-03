import React from "react";
import { View, Text, Button } from "react-native";
import { useForm } from "react-hook-form";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";
import CustomInput from "../../components/general/CustomInput";

const LogInScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log("onSubmit LOGIN:", data);
  const toSignUp = () => navigation.navigate("SignUp");
  
  return (
   <>
    <Header />
    <MainContainer>
      <View><Text>Welcome Back</Text></View>
      {/* Add regex rules */}
      <CustomInput control={control} name="username" rules={{ required: "Required field" }} />
      <CustomInput control={control} name="password" rules={{ required: "Required field" }} />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
      <Button onPress={toSignUp}>Sign Up Now!</Button>
    </MainContainer>
   </>
  )
};

export default LogInScreen;
