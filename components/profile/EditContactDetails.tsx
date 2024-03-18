import React from "react";
import { View, StyleSheet } from "react-native";

import { useForm } from "react-hook-form";

import CustomInput from "../general/CustomInput";
import CustomHeader from "../general/CustomHeader";
import CustomButton from "../general/CustomButton";
import MainContainer from "../general/MainContainer";

import { ContactDetailsType } from "../../utils/types/objectTypes";
import { autoComplete as AC } from "../../utils/constants/data/autoComplete";
import { MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";
import { ContactDetailsFromType } from "../../utils/constants/data/formTypes";
import {
  emailRegex,
  numbersRegex,
  required,
} from "../../utils/formValidations";

/* -------- Types -------- */
type PropsType = {
  user: ContactDetailsType;
  loading: boolean;
  setContact: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (formData: any) => Promise<void>;
};

/* ----------------------- */

const EditContactDetails = (props: PropsType) => {
  const { user, loading, setContact, onSubmit } = props;

  const { control, reset, handleSubmit } = useForm<ContactDetailsFromType>();

  const onPress = () => {
    reset();
    setContact(false);
  };

  return (
    <>
      <CustomHeader title="Contact Details" onPress={onPress} />
      <MainContainer>
        <View style={styles.container}>
          <CustomInput
            control={control}
            name="email"
            defaultValue={user.email}
            rules={{ ...required, ...emailRegex }}
            autoComplete={AC.email}
            inputMode="email"
            toLower
          />
          <CustomInput
            control={control}
            name="mobile"
            title={"phone number"}
            defaultValue={user.mobile}
            rules={numbersRegex}
            autoComplete={AC.tel}
            inputMode="numeric"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="submit"
            disabled={loading}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: (MAIN_HEIGHT * 9) / 10,
    maxHeight: MAIN_HEIGHT - 68,
    paddingTop: PIXELS,
  },
  buttonContainer: {
    width: "100%",
    height: MAIN_HEIGHT / 10,
    minHeight: 68,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditContactDetails;
