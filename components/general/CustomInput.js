import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { HEADING_COLOR } from "../../utils/constants/styles/colors";
import { PIXELS } from "../../utils/constants/styles/dimensions";

const CustomInput = ({ control, name, rules, title, defaultValue }) => {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>{title || name}</Text>
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      rules={rules || {}}
      render={({ field: { onBlur, onChange, value }, fieldState}) => {
        return (
          <>
            <TextInput style={styles.input} value={value} onChangeText={onChange} onBlur={onBlur} />
            {fieldState.error && 
              <Text style={styles.errorText}>{fieldState.error.message || "Invalid Input"}</Text>}
          </>
        );
      }}
    />
   </View>
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
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  errorText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'red',
  },
  input: {
    width: '85%',
    height: 32,
    marginTop: PIXELS / 2,
    paddingHorizontal: PIXELS,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: PIXELS,
  }
});

export default CustomInput;
