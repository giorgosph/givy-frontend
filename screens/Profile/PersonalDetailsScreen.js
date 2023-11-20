import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/general/Header";
import CustomTitle from "../../components/general/CustomTitle";
import UserDetails from "../../components/profile/UserDetails";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";

import userDetails from "../../utils/constants/data/userDetails.json";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { AUTH_ACTIVE_COLOR, BACKGROUND_COLOR, HEADING_COLOR_FADE } from "../../utils/constants/styles/colors";

const PersonalDetailsScreen = ({ navigation }) => {
  // TODO -> get user's personal details from redux
  const user = userDetails;
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
   <>
    <Header />
    <MainContainer>
      <View style={styles.detailsContainer}>
        <CustomTitle text={fullName} size={1} extraStyles={styles.title} />
        <CustomTitle text={`@${user.username}`} size={3} lowercase extraStyles={styles.subTitle} />
        <UserDetails user={user} />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton title={'My Draws'} style={styles.button1} textStyle={styles.buttonText1} />
        <CustomButton title={'My Wins'} style={styles.button2} textStyle={styles.buttonText2} />
      </View>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 8,
    margin: PIXELS,
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginLeft: PIXELS,
  },
  subTitle: {
    marginLeft: PIXELS,
    color: HEADING_COLOR_FADE,
  },
  button1: {
    margin: 0, 
    width: '65%',
    backgroundColor: AUTH_ACTIVE_COLOR
  },
  buttonText1: {
    fontSize: 18,
    color: BACKGROUND_COLOR
  },
  button2: {
    width: '65%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: AUTH_ACTIVE_COLOR
  },
  buttonText2: {
    fontSize: 18,
    color: AUTH_ACTIVE_COLOR
  },
});

export default PersonalDetailsScreen;
