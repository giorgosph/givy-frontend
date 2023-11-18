import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/general/Header";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import ContactDetails from "../../components/profile/ContactDetails";
import ShippingDetails from "../../components/profile/ShippingDetails";

import userDetails from "../../utils/constants/data/userDetails.json";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const PersonalDetailsScreen = ({navigation}) => {
  // TODO -> get user's personal details from redux
  const user = userDetails;

  return (
   <>
    <Header />
    <MainContainer>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={styles.text}>{user.username}</Text>
        <ContactDetails user={user} />
        <ShippingDetails user={user} />
      </View>
      <View>
        <CustomButton title={'My Draws'} />
        <CustomButton title={'My Wins'} />
      </View>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 8,
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    margin: PIXELS,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    // color: 'red',
    textTransform: 'lowercase',
  },
  buttonsContainer: {
    flex: 1,
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default PersonalDetailsScreen;
