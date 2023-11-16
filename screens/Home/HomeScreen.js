import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/general/Header"
import MainContainer from "../../components/general/MainContainer"

import { PIXELS, WIDTH } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const HomeScreen = () => {
  return (
   <>
    <Header />
    <MainContainer>
      <View style={styles.contentLeftWrap} >
        <Text style={styles.title} >Lorem Ipsum</Text>
        <Text style={styles.paragraph} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec congue sapien.Nullam nisl dolor,</Text>
      </View>
      <View style={styles.contentRightWrap} >
        <Text style={styles.title} >Lorem Ipsum</Text>
        <Text style={styles.paragraph} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec congue sapien.Nullam nisl dolor,</Text>
      </View>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  contentLeftWrap: {
    width: WIDTH * 3/4,
    height: '50%',
    paddingLeft: PIXELS,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentRightWrap: {
    height: '50%',
    marginLeft: WIDTH / 4 + PIXELS,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    // fontFamily: 'Inter',
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  paragraph: {
    fontSize: 14,
    // fontFamily: 'Inter',
    fontWeight: '400',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  }
});

export default HomeScreen;
