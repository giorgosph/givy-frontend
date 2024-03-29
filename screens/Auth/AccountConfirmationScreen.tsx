import React from "react";
import { StyleSheet } from "react-native";

import Header from "../../components/general/Header";
import CustomText from "../../components/general/CustomText";
import CustomTitle from "../../components/general/CustomTitle";
import CustomInput from "../../components/general/CustomInput";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import { useForm } from "react-hook-form";
import useConfirmation from "../../hooks/components/useConfirmation";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { confirmationCodeValidation } from "../../utils/formValidations";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { ConfirmationCodeFromType } from "../../utils/constants/data/formTypes";
import {
  BACKGROUND_COLOR,
  BUTTON_COLOR,
} from "../../utils/constants/styles/colors";
import { ClientHomeAccountConfirmationScreenProps } from "../../utils/navigation/types";

const AccountConfirmationScreen = ({
  route,
}: ClientHomeAccountConfirmationScreenProps) => {
  const { type } = route.params;

  const { control, handleSubmit, clearErrors } =
    useForm<ConfirmationCodeFromType>({
      mode: "onSubmit",
      reValidateMode: "onSubmit",
    });

  const { state, notificationState, callback } = useConfirmation();
  const loading =
    state.reqStatus === apiStatus.LOADING ||
    notificationState.reqStatus === apiStatus.LOADING;

  const { buttonTitle, title, text } = type.text;

  const formError = () => {
    alert("Invalid Confirmation Code");
    clearErrors();
  };

  return (
    <>
      <Header />
      <MainContainer centered>
        <CustomTitle text={title} size={1} extraStyles={styles.title} />
        <CustomInput
          control={control}
          name="code"
          title="confirmation code"
          rules={confirmationCodeValidation}
          autoComplete={AC.oneTimeCode}
          inputMode="numeric"
          clearErrors={formError}
        />
        <CustomText text={text} extraStyles={styles.text} />
        <CustomButton
          title="Submit"
          onPress={handleSubmit((formData) =>
            callback.confirmAccount(type.value, formData)
          )}
          disabled={loading}
          style={styles.button1}
          textStyle={styles.buttonText1}
        />
        <CustomButton
          title={buttonTitle}
          onPress={() => callback.resend(type.value)}
          disabled={loading}
          style={styles.button2}
          textStyle={styles.buttonText2}
        />
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: PIXELS * 2,
  },
  // input: {
  //   width: 180,
  //   height: 50,
  //   marginVertical: PIXELS / 2,
  //   fontSize: 26,
  //   borderRadius: 6,
  //   backgroundColor: 'white',
  // },
  text: {
    textAlign: "center",
    marginBottom: PIXELS * 2,
  },
  button1: {
    margin: 0,
    width: "80%",
  },
  buttonText1: {
    fontSize: 18,
    color: BACKGROUND_COLOR,
  },
  button2: {
    width: "80%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: BUTTON_COLOR,
  },
  buttonText2: {
    fontSize: 18,
    color: BUTTON_COLOR,
  },
});

export default AccountConfirmationScreen;
