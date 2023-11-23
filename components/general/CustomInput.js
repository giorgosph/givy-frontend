import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Animated, Easing } from "react-native";

import { Controller } from "react-hook-form";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const CustomInput = ({ control, name, rules, title, defaultValue, type, numeric, email }) => {
  const [isFocused] = useState(new Animated.Value(defaultValue ? 1 : 0));
  const isPass = type === 'password';

  const handleFocus = () => {
    Animated.timing(isFocused, {
      toValue: 1,
      duration: 800,
      easing: Easing.easeOut,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = (value) => {
    Animated.timing(isFocused, {
      toValue: value ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      rules={rules || {}}
      render={({ field: { onChange, value }, fieldState}) => {
        const hasValue = value && value.length > 0;
        const isString = typeof value === 'string';

        const top = isFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [24, -5],
        });
        const zIndex = isFocused.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1000],
        });
        const color = isFocused.interpolate({
          inputRange: [0, 1],
          outputRange: ['#fff', '#000'],
        });

        return (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Animated.View style={[styles.titleContainer, {top: top, zIndex: zIndex, backgroundColor: color}]}>
                <Text style={styles.title}>{title || name}</Text>
              </Animated.View>
              {rules?.required && 
                <View style={styles.asteriskConatiner}><Text style={styles.asterisk}>*</Text></View>}
              <TextInput
                // TODO -> improve logic of inputMode etc. (make inputMode options constant and pass as an argument
                // or do it based on type prop) 
                style={styles.input}
                value={!isPass ? value.toLowerCase() : String(value) }
                onChangeText={onChange}
                onFocus={handleFocus}
                onBlur={()=>handleBlur(hasValue)}
                placeholder={title || name}
                defaultValue={defaultValue || ''}
                inputMode={numeric ? 'numeric' : email ? 'email' : 'text'}
                autoComplete={ type || 'none'}
                secureTextEntry={isPass}
                autoCapitalize="none"
              />
            </View>
            {fieldState.error && 
              <Text style={styles.errorText}>{fieldState.error.message || "Invalid Input"}</Text>
            }
          </View>
        );
      }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: PIXELS * 3/4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  inputContainer: {
    width: '90%',
    height: 56,
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 44,
    marginTop: PIXELS / 2,
    paddingHorizontal: PIXELS * 1.5,
    paddingTop: 2,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: PIXELS,
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 12,
    position: 'absolute',
    left: PIXELS,
    zIndex: 1000,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  asteriskConatiner: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    right: PIXELS,
    zIndex: 1000,
  },
  asterisk: {
    fontSize: 22,
    color: 'red',
  },
  errorText: {
    marginLeft: PIXELS,
    fontSize: 12,
    fontWeight: '400',
    color: 'red',
  },
});

export default CustomInput;
