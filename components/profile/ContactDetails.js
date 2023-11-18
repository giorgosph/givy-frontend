import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../general/CustomButton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { TEXT_TITLE } from "../../utils/constants/styles/colors";

const ContactDetails = ({ user }) => {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <Text style={styles.text}>{user.email}</Text>
      <Text style={styles.text}>{user.mobile}</Text>
      <CustomButton title={'Edit'}/>
   </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    marginVertical: PIXELS,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    // color: HEADING_COLOR,
    color: TEXT_TITLE,
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    // color: 'red',
    textTransform: 'lowercase',
  },
});

export default ContactDetails;
