import React from "react";
import { View, StyleSheet } from "react-native";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomHeader from "../general/CustomHeader";
import CustomButton from "../general/CustomButton";
import MainContainer from "../general/MainContainer";

import { PIXELS } from "../../utils/constants/styles/dimensions";

const EditContactDetails = (props) => {
  const { user, state, onSubmit } = props;
  const { loading, error } = state.api;

  const { control, reset, handleSubmit } = useForm();

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <>
      <CustomHeader title='Contact Details' onPress={()=>{
        reset(); 
        state.screen.setContact(false);
      }}/>
      <MainContainer>
        <View style={styles.container}>
          {/* Add regex rules */}
          <CustomInput control={control} name="email" defaultValue={user?.email} />
          {/* replace mobile with number input */}
          <CustomInput control={control} name="mobile" title={'phone number'} defaultValue={user?.mobile} /> 
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton 
            title='submit'
            disabled={loading} 
            style={{opacity: loading ? 0.4 : 1}}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </MainContainer>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    paddingLeft: PIXELS,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EditContactDetails;
