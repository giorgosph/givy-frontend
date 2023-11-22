import React from "react";
import { View, StyleSheet } from "react-native";

import CustomInput from "../general/CustomInput";
import CustomButton from "../general/CustomButton";

import { PIXELS } from "../../utils/constants/styles/dimensions";

import useEditContactDetails from "../../hooks/components/useEditContactDetails";

const EditContactDetails = ({ user }) => {
  const { loading, error, control, handleSubmit} = useEditContactDetails();
  // will need to confirm new email before changing

  return (
    // TODO -> loading && loadingModal
    // TODO -> !loading && error && errorModal
    <>
      <View style={styles.container}>
        {/* Add regex rules */}
        <CustomInput control={control} name="email" defaultValue={user.email} />
        <CustomInput control={control} name="mobile" title={'phone number'} defaultValue={user.mobile} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton 
          title='submit'
          disabled={loading} 
          style={{opacity: loading ? 0.4 : 1}}
          onPress={handleSubmit()}
        />
      </View>
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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EditContactDetails;
