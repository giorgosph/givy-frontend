import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { useForm } from "react-hook-form";

import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";
import FilterDropdown from "../general/FilterDropdown";

import { HEADER_HEIGHT, MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

const DrawFilter = ({ locations, categories, enable, submit }) => {
  // Example data for locations and categories
  locations = [
    { value: 'L1', label: 'Location 1' },
    { value: 'L2', label: 'Location 2' },
    { value: 'L3', label: 'Location 3' },
    { value: 'L4', label: 'Location 4' },
     ];
  categories = [
    { value: 'C1', label: 'Category 1' },
    { value: 'C2', label: 'Category 2' },
    { value: 'C3', label: 'Category 3' },
  ];

  const { control } = useForm();

  return (
    enable && (    
      <>  
        <View style={styles.container}>
          <CustomTitle text="Filters" size={1} extraStyles={styles.title} />
          <ScrollView>
            <FilterDropdown control={control} name="location" data={locations}/>
            <FilterDropdown control={control} name="category" data={categories}/>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={submit} title="Submit" />
        </View>
      </>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: MAIN_HEIGHT - PIXELS * 5,
    padding: PIXELS * 2,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: PIXELS / 2,
    position: 'absolute',
    top: HEADER_HEIGHT + PIXELS * 5,
    right: PIXELS,
    zIndex: 1002
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: PIXELS,
    zIndex: 1002
  },
  title: {
    textAlign: "center",
    marginBottom: PIXELS / 2,
  },
  filterSection: {
    marginTop: PIXELS / 4,
  },
  filterOption: {
    color: '#fff', 
    marginBottom: PIXELS / 4,
  },
});

export default DrawFilter;