import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Animated } from "react-native";

import useAuth from "../../hooks/components/useAuth";

import Login from "../../components/auth/Login";
import Signup from "../../components/auth/Signup";
import Header from "../../components/general/Header";
import AuthNavbar from "../../components/auth/AuthNavbar";
import MainContainer from "../../components/general/MainContainer";

import { MAIN_HEIGHT, WIDTH } from "../../utils/constants/styles/dimensions";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import {
  AUTH_ACTIVE_COLOR,
  AUTH_INACTIVE_COLOR,
} from "../../utils/constants/styles/colors";

import { DefaultProfileAuthScreenProps } from "../../utils/navigation/types";

const AuthScreen = ({ navigation }: DefaultProfileAuthScreenProps) => {
  const { state, callback } = useAuth();
  const loading = state.reqStatus === apiStatus.LOADING;

  const animation = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);

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
      {callback.renderModal()}
      <Header />
      <MainContainer>
        <View style={styles.navBarWrap}>
          <AuthNavbar
            title="Log In"
            color={loginNavColor}
            stylesBorder={[styles.leftBorder, { width: loginNavWidth }]}
            onPress={() => scrollRef.current?.scrollTo({ x: 0 })}
          />
          <AuthNavbar
            title="Sign Up"
            color={signupNavColor}
            stylesBorder={[styles.rightBorder, { width: signupNavWidth }]}
            onPress={() => scrollRef.current?.scrollTo({ x: WIDTH })}
          />
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: animation } } }],
            { useNativeDriver: false }
          )}
        >
          <View style={styles.inputWrap}>
            <Login
              loading={loading}
              logIn={callback.logIn}
              navigation={navigation}
            />
          </View>
          <View style={styles.inputWrap}>
            <Signup loading={loading} signUp={callback.signUp} />
          </View>
        </ScrollView>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  navBarWrap: {
    width: "100%",
    height: MAIN_HEIGHT / 7,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  leftBorder: {
    width: "40%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rightBorder: {
    width: "45%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputWrap: {
    width: WIDTH,
    height: (MAIN_HEIGHT * 6) / 7,
  },
});

export default AuthScreen;
