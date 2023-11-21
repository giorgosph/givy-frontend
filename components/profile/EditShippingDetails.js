import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import CustomInput from "../general/CustomInput";
import CustomButton from "../general/CustomButton";

import useEditShippingDetails from "../../hooks/components/useEditShippingDetails";

const EditShippingDetails = ({ user }) => {
  const { loading, error, control, handleSubmit} = useEditShippingDetails();

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        {/* Add regex rules */}
        <CustomInput control={control} name="country" defaultValue={user.country} />
        <CustomInput control={control} name="city" defaultValue={user.city} />
        <CustomInput control={control} name="address1" title={'address 1'} defaultValue={user.address1} />
        <CustomInput control={control} name="address2" title={'address 2'} defaultValue={user.address2} />
        <CustomInput control={control} name="postalCode" title={"postal code"} defaultValue={user.postalCode} />
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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EditShippingDetails;
