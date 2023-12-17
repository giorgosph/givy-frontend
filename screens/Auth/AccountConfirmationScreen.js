import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Header from "../../components/general/Header";
import CustomText from "../../components/general/CustomText";
import CustomTitle from "../../components/general/CustomTitle";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { BACKGROUND_COLOR, BUTTON_COLOR } from "../../utils/constants/styles/colors";

import useConfirmation from "../../hooks/components/useConfirmation";

const AccountConfirmationScreen = ({ route }) => {
  const { type } = route.params;

  const { state, callback } = useConfirmation();

  const { code, setCode } = state.confirmation; 
  const { loading, sending } = state.api; 

  const { buttonTitle, title, text } = type.text;

  return (
    <>
      <Header />
      <MainContainer centered>
        <CustomTitle text={title} size={1} extraStyles={styles.title} />
        <TextInput value={code} onChangeText={text => setCode(text)} inputMode="numeric" style={styles.input} textAlign="center" />
        <CustomText text={text} extraStyles={styles.text}/>
        <CustomButton 
          title="Submit" 
          onPress={() => callback.confirmAccount(type.value)} 
          disabled={loading || sending} 
          style={styles.button1}
          textStyle={styles.buttonText1}
        />
        <CustomButton 
          title={buttonTitle} 
          onPress={() => callback.resend(type.value)} 
          disabled={loading || sending}  
          style={styles.button2}
          textStyle={styles.buttonText2}
        />
      </MainContainer>
    </>
  )
};

const styles = StyleSheet.create({
  title: {
    marginVertical: PIXELS * 2,
  },
  input: {
    width: 180,
    height: 50,
    marginVertical: PIXELS / 2,
    fontSize: 26,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginBottom: PIXELS * 2,
  },
  button1: {
    margin: 0, 
    width: '80%',
  },
  buttonText1: {
    fontSize: 18,
    color: BACKGROUND_COLOR
  },
  button2: {
    width: '80%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: BUTTON_COLOR,
  },
  buttonText2: {
    fontSize: 18,
    color: BUTTON_COLOR,
  },
});

export default AccountConfirmationScreen;
