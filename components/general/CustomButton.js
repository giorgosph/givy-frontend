import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { TEXT_COLOR } from '../../utils/styles/colors';
import { PIXELS } from '../../utils/styles/dimensions';

const CustomButton = ({ title, onPress, disabled, style={}, textStyle={} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { ...style }]}
      disabled={disabled} 
      onPress={onPress}
    >
      <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin: PIXELS,
    backgroundColor: '#6450e3',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_COLOR,
    textTransform: 'capitalize',
    
  },
});

export default CustomButton;
