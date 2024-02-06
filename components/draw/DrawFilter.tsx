import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";
import FilterDropdown from "../general/FilterDropdown";

import { DrawType } from "../../utils/types/objectTypes";
import { HEADER_HEIGHT, MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

/* ------ Types ------ */
type PropsType = {
  draws: DrawType[];
  enable: boolean; 
  onSubmit: (data: DrawType[]) => void; 
};

/* ------------------- */

const DrawFilter = (props: PropsType) => {
  const { draws, enable, onSubmit } = props;

  const [locations, setLocations] = useState<number[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('none');
  
  const [categories, setCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('none');

  const [filteredDraws, setFilteredDraws] = useState<DrawType[]>([]);

  useEffect(() => {
    const updatedLocations: number[] = [];
    const updatedCategories: number[] = [];
    const filtered: DrawType[] = [];

    !!draws && draws.length > 0 && draws.forEach(draw => {
      const location = draw.location;
      const category = draw.category;

      const matchLocation = selectedLocation === 'none' || selectedLocation === location;
      const matchCategory = selectedCategory === 'none' || selectedCategory === category;

      if(matchLocation && matchCategory){
        filtered.push(draw);
        updatedLocations[location] = (updatedLocations[location] || 0) + 1;
        updatedCategories[category] = (updatedCategories[category] || 0) + 1;
      } 
    });

    setFilteredDraws(filtered);
    setLocations(updatedLocations);
    setCategories(updatedCategories);
  }, [selectedCategory, selectedLocation, draws]);

  return (
    enable && (    
      <>  
        <View style={styles.container}>
          <CustomTitle text="Filters" size={1} extraStyles={styles.title} />
          <ScrollView>
            <FilterDropdown onClick={setSelectedLocation} name="location" data={locations} selectedItem={selectedLocation} />
            <FilterDropdown onClick={setSelectedCategory} name="category" data={categories} selectedItem={selectedCategory} />
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => onSubmit(filteredDraws)} title="Submit" />
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