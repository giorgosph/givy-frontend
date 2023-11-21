import React from "react";
import { View, StyleSheet } from "react-native";

import CustomTitle from "../general/CustomTitle";
import CustomText from "../general/CustomText";
import { PIXELS } from "../../utils/constants/styles/dimensions";

const DetailsField = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomTitle text={title} size={5}/>
      </View>
      <CustomText text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: PIXELS / 4,
  },
  titleContainer: {
    marginHorizontal: PIXELS / 2,
  },
});

export default DetailsField;
