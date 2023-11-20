import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../general/CustomButton";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const ShippingDetails = ({ user }) => {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>Shipping Details</Text>
      <Text style={styles.text}>{user.country}</Text>
      <Text style={styles.text}>{user.city}</Text>
      <Text style={styles.text}>{user.address1}</Text>
      <Text style={styles.text}>{user.address2}</Text>
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
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    // color: 'red',
    textTransform: 'lowercase',
  },
});

export default ShippingDetails;
