import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "../../components/general/Header";
import CustomTitle from "../../components/general/CustomTitle";
import UserDetails from "../../components/profile/UserDetails";
import CustomButton from "../../components/general/CustomButton";
import MainContainer from "../../components/general/MainContainer";
import EditContactDetails from "../../components/profile/EditContactDetails";
import EditShippingDetails from "../../components/profile/EditShippingDetails";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { AUTH_ACTIVE_COLOR, BACKGROUND_COLOR, HEADING_FADE_COLOR } from "../../utils/constants/styles/colors";

import usePersonalDetails from "../../hooks/components/usePersonalDetails";

const PersonalDetailsScreen = ({ navigation }) => {
  const { loading, error, edit, user} = usePersonalDetails();

  const fullName = `${user?.firstName} ${user?.lastName}`;

  const navTo = (screen) => navigation.navigate(screen);

  return (
   <>
      {/* TODO -> ? make a loading skeleton/animation to remove 'user?.' */}
      {edit.contact ? <EditContactDetails user={user} setEditContact={edit.setContact} /> 
      : edit.shipping ? <EditShippingDetails user={user} setEditShipping={edit.setShipping} />
      : (
        <>
          <Header />
          <MainContainer >
            <View style={styles.detailsContainer}>
              <CustomTitle text={fullName} extraStyles={styles.title} />
              <CustomTitle text={`@${user?.username}`} size={4} lowercase extraStyles={styles.subTitle} />
              <UserDetails user={user} setEditContact={edit.setContact} setEditShipping={edit.setShipping} />
            </View>
            <View style={styles.buttonsContainer}>
              <CustomButton title={'My Draws'} style={styles.button1} textStyle={styles.buttonText1} onPress={()=>navTo('MyDraws')} />
              <CustomButton title={'My Wins'} style={styles.button2} textStyle={styles.buttonText2} onPress={()=>navTo('MyWins')} />
            </View>
          </MainContainer>
        </>
      )}
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
    marginBottom: PIXELS,
    color: HEADING_FADE_COLOR,
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
