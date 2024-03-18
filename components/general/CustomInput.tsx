import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  BACKGROUND_COLOR,
  HEADING_COLOR,
} from "../../utils/constants/styles/colors";
import { AutoCompleteType } from "../../utils/constants/data/autoComplete";

/* --------- Types --------- */
type InputModeType =
  | "none"
  | "text"
  | "tel"
  | "url"
  | "email"
  | "numeric"
  | "decimal"
  | "search";

type PropsType = {
  control: Control<any>;
  name: string;
  rules?: RegisterOptions; // TODO -> make it mandatory (first handle clearErrors logic, used in Login)
  title?: string;
  defaultValue?: any;
  autoComplete?: AutoCompleteType;
  inputMode?: InputModeType;
  toLower?: boolean;
  textCentered?: boolean;
  clearErrors?: () => void;
};

/* ------------------------- */

const CustomInput = (props: PropsType) => {
  const {
    control,
    name,
    rules,
    title,
    defaultValue,
    autoComplete,
    inputMode,
    toLower = false,
    textCentered = false,
    clearErrors,
  } = props;

  const [isFocused] = useState(new Animated.Value(defaultValue ? 1 : 0));
  const isPass =
    autoComplete === "current-password" || autoComplete === "new-password";

  const handleFocus = () => {
    Animated.timing(isFocused, {
      toValue: 1,
      duration: 800,
      easing: Easing.bezier(0.39, 0.575, 0.565, 1),
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = (value: boolean) => {
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
      defaultValue={defaultValue || ""}
      rules={rules || {}}
      render={({ field: { onChange, value }, fieldState }) => {
        const hasValue = value && value.length > 0;
        // const isString = typeof value === "string";

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
          outputRange: ["#fff", BACKGROUND_COLOR],
        });

        const handleErrors = () => {
          if (!clearErrors)
            return (
              <Text style={styles.errorText}>
                {fieldState.error?.message || "Invalid Input"}
              </Text>
            );
          clearErrors();
        };

        return (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Animated.View
                style={[
                  styles.titleContainer,
                  { top: top, zIndex: zIndex, backgroundColor: color },
                ]}
              >
                <Text style={styles.title}>{title || name}</Text>
              </Animated.View>
              {rules?.required && (
                <View style={styles.asteriskConatiner}>
                  <Text style={styles.asterisk}>*</Text>
                </View>
              )}
              <TextInput
                style={styles.input}
                textAlign={textCentered ? "center" : "left"}
                value={
                  isPass
                    ? value
                    : toLower
                    ? value.toLowerCase().trim()
                    : value.trim()
                }
                onChangeText={onChange}
                onFocus={handleFocus}
                onBlur={() => handleBlur(hasValue)}
                placeholder={title || name}
                defaultValue={defaultValue || ""}
                inputMode={inputMode || "text"}
                autoComplete={autoComplete || undefined}
                secureTextEntry={isPass}
                autoCapitalize="none"
              />
            </View>
            {fieldState.error && handleErrors()}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: (PIXELS * 3) / 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    height: 56,
    justifyContent: "center",
    position: "relative",
  },
  input: {
    width: "100%",
    height: 44,
    marginTop: PIXELS / 2,
    paddingHorizontal: PIXELS * 1.5,
    paddingTop: 2,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    borderRadius: PIXELS,
  },
  titleContainer: {
    paddingHorizontal: 12,
    paddingBottom: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 12,
    position: "absolute",
    left: PIXELS,
    zIndex: 1000,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: HEADING_COLOR,
    textTransform: "capitalize",
  },
  asteriskConatiner: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20,
    position: "absolute",
    top: 0,
    right: PIXELS,
    zIndex: 1000,
  },
  asterisk: {
    fontSize: 22,
    color: "red",
  },
  errorText: {
    marginLeft: PIXELS,
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});

export default CustomInput;
