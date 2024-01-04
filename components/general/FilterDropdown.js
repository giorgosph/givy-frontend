import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

import ArrowIcon from "../icons/ArrowIcon";
import { Controller } from "react-hook-form";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";

const FilterDropdown = ({ control, name, title, data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState('none');

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const handleSelect = (value, onChange) => {
    onChange(value);
    setSelectedItem(value);
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { onChange } }) => {
        const direction = isExpanded ? 'D' : 'F';

        return (
          <>
            <TouchableWithoutFeedback onPress={toggleExpansion}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title || name}</Text>
                <ArrowIcon size={22} color='white' direction={direction} />
              </View>
            </TouchableWithoutFeedback>

            {isExpanded && 
              <>
                <TouchableOpacity key={'none'} onPress={() => handleSelect('none', onChange)}>
                  <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Any</Text>
                    <View 
                      style={[
                        styles.indicator, 
                        { backgroundColor: selectedItem == 'none' ? 'white' : 'transparent' }
                      ]} 
                    />
                  </View>
                </TouchableOpacity>

                {data.map((item) => {
                  const bColor = item.value == selectedItem ? 'white' : 'transparent';

                  return (
                    <TouchableOpacity key={item.value} onPress={() => handleSelect(item.value, onChange)}>
                      <View style={styles.optionContainer}>
                        <Text style={styles.optionText}>{item.label}</Text>
                        <View style={[styles.indicator, { backgroundColor: bColor }]} />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            }
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    paddingVertical: PIXELS / 2,
    paddingHorizontal: PIXELS,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: HEADING_COLOR,
    textTransform: "capitalize",
  },
  indicator: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: 'white',
  },
  optionContainer: {
    width: "100%",
    paddingVertical: PIXELS / 4,
    paddingLeft: PIXELS * 1.5,
    paddingRight: PIXELS * 2.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionText: {
    fontSize: 14,
    color: 'white',
    fontWeight: "bold",
  },
  errorText: {
    marginLeft: 12,
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});

export default FilterDropdown;