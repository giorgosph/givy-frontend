import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';

const AuthScreenNav = (props) => {
  const { title, stylesBorder, color, onPress} = props;
  
  return (
    <TouchableWithoutFeedback style={styles.conatiner} onPress={onPress}>
      <Animated.View style={[styles.navBar, stylesBorder, {backgroundColor: color}]}>
        <Text style={styles.navText}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    width: '100%',
  },
  navBar: {
    height: 45,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AuthScreenNav;