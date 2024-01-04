import React from "react";
import { View, StyleSheet } from "react-native";

import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { COLOR3, HEADING_COLOR } from "../../utils/constants/styles/colors";
import { HEADER_HEIGHT, MAIN_HEIGHT, PIXELS } from "../../utils/constants/styles/dimensions";

import sortData from "../../utils/constants/data/dropdown/sortData";

const DrawSort = ({ handleSort, enable, selectedItem }) => {
  return (
    enable && (
      <View style={styles.container}>
        <CustomTitle text="Sort By" size={1} extraStyles={styles.title} />
        <View style={styles.buttonsContainer}>
          {sortData.map(({value, label}) => {
            const isSelected = selectedItem === value;

            return (
              <CustomButton 
                key={value}
                title={label} 
                onPress={() => handleSort(value)} 
                style={{...styles.button,  borderColor: isSelected ? COLOR3 : HEADING_COLOR }} 
                textStyle={{ color: isSelected ? COLOR3 : HEADING_COLOR }}
              />
            );
          })}
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: MAIN_HEIGHT - PIXELS * 5,
    padding: PIXELS * 2,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: PIXELS / 2,
    position: 'absolute',
    top: HEADER_HEIGHT + PIXELS * 5,
    left: PIXELS,
    zIndex: 1001
  },
  title: {
    textAlign: "center",
    marginBottom: PIXELS,
  },
  buttonsContainer: {
    width: '100%',
    height: '80%',
    paddingVertical: PIXELS,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
});

export default DrawSort;