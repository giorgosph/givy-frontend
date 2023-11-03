import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/general/Header"
import MainContainer from "../../components/general/MainContainer"

import { WIDTH } from "../../utils/styles/dimensions";

const HomeScreen = () => {
  return (
   <>
    <Header />
    < MainContainer>
      <View style={styles.contentLeftWrap} >
        <Text>Lorem Ipsum</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec congue sapien.Nullam nisl dolor,</Text>
      </View>
      <View style={styles.contentRightWrap} >
        <Text>Lorem Ipsum</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec congue sapien.Nullam nisl dolor,</Text>
      </View>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  contentLeftWrap: {
    width: WIDTH / 2,
    height: '50%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentRightWrap: {
    height: '50%',
    marginLeft: WIDTH / 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default HomeScreen;
