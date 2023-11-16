import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView, Animated  } from 'react-native';

import Header from '../../components/general/Header';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import AuthNavbar from '../../components/auth/AuthNavbar';
import MainContainer from '../../components/general/MainContainer';

import { WIDTH } from '../../utils/constants/styles/dimensions';
import { AUTH_ACTIVE_COLOR, AUTH_INACTIVE_COLOR } from '../../utils/constants/styles/colors';

const AuthScreen = () => { 
  const animation = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const loginNavColor = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: [AUTH_ACTIVE_COLOR, AUTH_INACTIVE_COLOR],
  });
  
  const loginNavWidth = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: [WIDTH / 2, WIDTH / 4],
  });
  
  const signupNavColor = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: [AUTH_INACTIVE_COLOR, AUTH_ACTIVE_COLOR],
  });
  
  const signupNavWidth = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: [WIDTH / 4, WIDTH / 2],
  });
  

  return (
    <>
    <Header />
    <MainContainer>
      <View style={styles.navBarWrap}>
        <AuthNavbar title='Log In' color={loginNavColor} 
          stylesBorder={[styles.leftBorder, {width: loginNavWidth}]} 
          onPress={() => scrollRef.current.scrollTo({x: 0})} 
        />
        <AuthNavbar title='Sign Up' color={signupNavColor} 
          stylesBorder={[styles.rightBorder, {width: signupNavWidth}]} 
          onPress={() => scrollRef.current.scrollTo({x: WIDTH})} 
        />
      </View>
      <ScrollView 
        ref={scrollRef} horizontal pagingEnabled 
        scrollEventThrottle={16} 
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x:animation}}}], {useNativeDriver: false})} 
        >
        <View style={styles.inputWrap}>
          <Login />
        </View>
        <View style={styles.inputWrap}>
          <Signup />
        </View>
      </ScrollView>
    </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  navBarWrap: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 32,
  }, 
  leftBorder: {
    width: '40%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },   
  rightBorder: {
    width: '45%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }, 
  inputWrap: {
    width: WIDTH,
    height: '100%',
  },  
});

export default AuthScreen;