import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomButton from "../general/CustomButton";
import CustomDropdown from "../general/CustomDropdown";

import { isAndroid } from "../../utils/constants/device";

import { SignupFormType } from "../../utils/constants/data/formTypes";
import genderData from "../../utils/constants/data/dropdown/genderData";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import {
  validateAllInputs,
  emailRegex,
  lettersRegex,
  numbersRegex,
  passwordValidation,
  required,
  usernameValidation,
} from "../../utils/formValidations";

/* --------- Types --------- */
type PropsType = {
  loading: boolean;
  signUp: (formData: SignupFormType) => void;
};

/* ------------------------- */

const Signup = (props: PropsType) => {
  const { loading, signUp } = props;
  const { control, handleSubmit } = useForm<SignupFormType>({
    mode: "onChange",
  });

  return (
    <KeyboardAvoidingView behavior={isAndroid ? "padding" : "height"}>
      <KeyboardAwareScrollView enableOnAndroid={true} style={styles.container}>
        <CustomInput
          control={control}
          name="firstName"
          title="first name"
          rules={{ ...required, ...lettersRegex }}
          autoComplete={AC.name}
        />
        <CustomInput
          control={control}
          name="lastName"
          title="last name"
          rules={{ ...required, ...lettersRegex }}
          autoComplete={AC.familyName}
        />
        <CustomInput
          control={control}
          name="username"
          rules={usernameValidation}
          autoComplete={AC.username}
          toLower
        />

        <CustomInput
          control={control}
          name="email"
          rules={{ ...required, ...emailRegex }}
          autoComplete={AC.email}
          inputMode="email"
          toLower
        />
        <CustomInput
          control={control}
          name="mobile"
          title="phone number"
          rules={numbersRegex}
          autoComplete={AC.tel}
          inputMode="numeric"
        />

        <CustomInput
          control={control}
          name="password"
          rules={passwordValidation}
          autoComplete={AC.newPassword}
        />
        <CustomInput
          control={control}
          name="confirmPassword"
          title="confirm password"
          rules={required}
          autoComplete={AC.newPassword}
        />

        <CustomDropdown
          control={control}
          name="gender"
          rules={required}
          data={genderData}
        />

        <CustomInput
          control={control}
          name="country"
          rules={lettersRegex}
          autoComplete={AC.country}
        />
        <CustomInput control={control} name="city" rules={lettersRegex} />
        <CustomInput
          control={control}
          name="address1"
          title="address 1"
          rules={validateAllInputs}
          autoComplete={AC.addressLine1}
        />
        <CustomInput
          control={control}
          name="address2"
          title="address 2"
          rules={validateAllInputs}
          autoComplete={AC.addressLine2}
        />
        <CustomInput
          control={control}
          name="postalCode"
          title="postal code"
          rules={validateAllInputs}
          autoComplete={AC.postalCode}
        />
      </KeyboardAwareScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="submit"
          disabled={loading}
          onPress={handleSubmit(signUp)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
  },
  buttonContainer: {
    width: "100%",
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
