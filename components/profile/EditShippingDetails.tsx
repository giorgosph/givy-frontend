import React from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomHeader from "../general/CustomHeader";
import CustomButton from "../general/CustomButton";
import MainContainer from "../general/MainContainer";

import { isAndroid } from "../../utils/constants/device"
import { PIXELS } from "../../utils/constants/styles/dimensions";
import { ShippingDetailsType } from "../../utils/types/objectTypes";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { validateAllInputs, lettersRegex } from "../../utils/formValidations";
import { ShippingDetailsFromType } from "../../utils/constants/data/formTypes";

/* -------- Types -------- */
type PropsType = {
  user: ShippingDetailsType;
  loading: boolean; 
  setShipping: React.Dispatch<React.SetStateAction<boolean>>; 
  onSubmit: (formData: any) => Promise<void>;
};

/* ----------------------- */

const EditShippingDetails = (props: PropsType) => {
  const { user, loading, setShipping, onSubmit } = props;

  const { control, reset, handleSubmit } = useForm<ShippingDetailsFromType>();

  const onPress = () => {
    reset();
    setShipping(false);
  };

  return (
    <>
      <CustomHeader title='Shipping Details' onPress={onPress} />
      <MainContainer>
        <KeyboardAvoidingView behavior={isAndroid ? 'padding' : 'height'}>
          <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
            <CustomInput control={control} name="country" defaultValue={user.country} rules={lettersRegex} autoComplete={AC.country} />
            <CustomInput control={control} name="city" defaultValue={user.city} rules={lettersRegex} />
            <CustomInput control={control} name="address1" title={'address 1'} defaultValue={user.address1} rules={validateAllInputs} autoComplete={AC.addressLine1} />
            <CustomInput control={control} name="address2" title={'address 2'} defaultValue={user.address2} rules={validateAllInputs} autoComplete={AC.addressLine2} />
            <CustomInput control={control} name="postalCode" title={"postal code"} defaultValue={user.postalCode} rules={validateAllInputs} autoComplete={AC.postalCode} />
          </KeyboardAwareScrollView>
          <View style={styles.buttonContainer}>
            <CustomButton title='submit' disabled={loading} onPress={handleSubmit(onSubmit)} />
          </View>
        </KeyboardAvoidingView>
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
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default EditShippingDetails;
