import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { BACKGROUND_COLOR, BUTTON_COLOR } from '../../utils/constants/styles/colors';
import { BUTTON_HEIGHT, BUTTON_WIDTH, PIXELS } from '../../utils/constants/styles/dimensions';

const CustomButton = ({ title, onPress, disabled, style={}, textStyle={} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, {opacity: disabled ? 0.4 : 1}, { ...style }]}
      disabled={disabled} 
      onPress={onPress}
    >
      <Text style={[styles.text, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: PIXELS,
    alignItems: 'center',
    justifyContent: 'center',
    margin: PIXELS / 2,
    backgroundColor: BUTTON_COLOR,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: BACKGROUND_COLOR,
    textTransform: 'capitalize',
    
  },
});

export default CustomButton;
