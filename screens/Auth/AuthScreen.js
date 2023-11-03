import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Animated  } from 'react-native';

import Header from '../../components/general/Header';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import AuthNavbar from '../../components/auth/AuthNavbar';
import MainContainer from '../../components/general/MainContainer';

import { WIDTH } from '../../utils/styles/dimensions';

const AuthScreen = () => { 
  const animation = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const loginNavColor = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: ['rgba(27,27,27,1)', 'rgba(27,27,27,0.4)']
  });
  const signupNavColor = animation.interpolate({
    inputRange: [0, WIDTH],
    outputRange: ['rgba(27,27,27,0.4)', 'rgba(27,27,27,1)']
  });

  return (
    <>
    <Header />
    <MainContainer>
      <View style={styles.navBarWrap}>
        <AuthNavbar title='Log In' stylesBorder={styles.leftBorder} color={loginNavColor} 
          onPress={() => scrollRef.current.scrollTo({x: 0})} />
        <AuthNavbar title='Sign Up' stylesBorder={styles.rightBorder} color={signupNavColor} 
          onPress={() => scrollRef.current.scrollTo({x: WIDTH})} />
      </View>
      <ScrollView 
        ref={scrollRef} horizontal pagingEnabled 
        showsHorizontalScrollIndicator={false} 
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
    flexDirection: 'row',
    width: '90%',
  }, 
  leftBorder: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },   
  rightBorder: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }, 
  inputWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH,
  },  
});

export default AuthScreen;