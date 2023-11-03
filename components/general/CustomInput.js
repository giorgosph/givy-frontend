import React from "react";
import { Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";

const CustomInput = ({ control, name, rules }) => {

  return (
   <View>
    <Text>{name}</Text>
    <Controller
      control={control}
      name={name}
      defaultValue=''
      rules={rules || {}}
      render={({ field: { onBlur, onChange, value }, fieldState}) => {
        <>
          <TextInput value={value} onChangeText={onChange} onBlur={onBlur} />
          {fieldState.error && <Text>{fieldState.error.message || "Invalid Input"}</Text>}
        </>
      }}
    />
   </View>
  )
};

export default CustomInput;
