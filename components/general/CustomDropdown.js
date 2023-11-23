import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ArrowIcon from "../icons/ArrowIcon";
import { Controller } from "react-hook-form";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const CustomDropdown = ({ control, name, title, rules, data }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => setIsVisible(!isVisible);

  const handleSelect = (value, onChange) => {
    onChange(value);
    setIsVisible(false);
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={rules || {}}
      render={({ field: { onChange, value }, fieldState }) => {
        const hasValue = !!value;
        const label = `select ${title || name}`
        const color = hasValue ? 'black' : 'rgba(0, 0, 0, 0.7)';
        const zIndex = hasValue ? 1000 : 0;
        const top = hasValue ? -9 : 12;

        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal} style={styles.inputContainer}>
              <View style={[styles.titleContainer, {top: top, zIndex: zIndex}]}>
                <Text style={styles.title}>{title || name}</Text>
              </View>
              {rules?.required && 
                <View style={styles.asteriskConatiner}><Text style={styles.asterisk}>*</Text></View>
              }
              <Text style={[styles.inputText, {color: color}]}>{value || label}</Text>
              <View style={styles.iconContainer}><ArrowIcon color='black' direction='D' size={22} /></View>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={true} visible={isVisible}>
              <View style={styles.modal}>
                {data.map((item) => (
                  <TouchableOpacity
                    key={item.value}
                    style={styles.option}
                    onPress={() => handleSelect(item.value, onChange)}
                  >
                    <Text style={styles.optionText}>{item.value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </Modal>

            {fieldState.error && 
              <Text style={styles.errorText}>{fieldState.error.message || "Invalid Input"}</Text>
            }
          </View>
        );
      }}
    />
  );
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
  inputText: {
    width: '100%',
    height: 44,
    paddingHorizontal: PIXELS * 1.5,
    paddingTop: 13,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: PIXELS,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: PIXELS * 1.5,
    zIndex: 1001,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(51, 0, 51, 0.2)",
    
  },
  option: {
    width: "80%",
    padding: 10,
    backgroundColor: "white",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
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
    top: -3,
    right: PIXELS,
    zIndex: 1000,
  },
  asterisk: {
    fontSize: 22,
    color: 'red',
  },
  errorText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});

export default CustomDropdown;
