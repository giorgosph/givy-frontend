import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import DetailsField from "./DeatailsField";
import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { AUTH_INACTIVE_COLOR, INACTIVE_ICON_COLOR } from "../../utils/constants/styles/colors";

const UserDetails = ({ user }) => {
  return (
   <ScrollView contentContainerStyle={styles.container}>
      <CustomTitle text={"Contact Details"} color={INACTIVE_ICON_COLOR} />

      <DetailsField title={"email:"} text={user.email} />
      <DetailsField title={"phone number:"} text={user.mobile} />
      <CustomButton title={'Edit'} style={styles.button} textStyle={styles.buttonText} />

      <CustomTitle text={"Shipping Details"} color={INACTIVE_ICON_COLOR} />

      <DetailsField title={"country:"} text={user.country} />
      <DetailsField title={"city:"} text={user.city} />
      <DetailsField title={"address 1:"} text={user.address1} />
      <DetailsField title={"address 2:"} text={user.address2} />

      <CustomButton title={'Edit'} style={styles.button} textStyle={styles.buttonText} />
   </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: PIXELS * 2,
    alignItems: 'center',
  },
  button:{
    width: '40%',
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: AUTH_INACTIVE_COLOR,
  },
});

export default UserDetails;
